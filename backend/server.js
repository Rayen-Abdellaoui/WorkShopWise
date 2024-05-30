const express  = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');



const PORT = 5555;
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./models/Users.js');
const WorkShopsModel = require('./models/WorkShops.js');
const ClubModel = require('./models/Club.js');
const ParticipationsModel = require('./models/Participations.js');

const app = express();
app.use(session({
    secret: "securite sa7bi",
    resave:false,
    saveUninitialized: false,
    cookie: { secure: false } ,
}))
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
}));

mongoose.connect("mongodb://127.0.0.1:27017/PPP")
.then(console.log("Connected to Database"));


const isLoggedIn = (req, res, next) => { // use it for access to account page
    if (req.session.user) {
      next();
    } else {
      res.status(403).send('Unauthorized access. Please login.');
    }
  };

app.post("/login",  async(req, res) => {
    const { login_email, login_password } = req.body;
    UsersModel.findOne({email : login_email})
    .then(user =>{
        if(user){
            if(user.password === login_password){
                req.session.user = {username : user.firstname, user_id : user._id};
                res.send(req.session.user);
            }
            else
                res.send("Wrong Password");
        }
        else{
            res.send("No user with this email")
        }
    })
    .catch(err => console.log(err));

});


app.post("/sign-in",async (req,res) =>{
    const { firstname ,lastname, email ,phone ,password } = req.body;
    try {
        const user = await UsersModel.findOne({ email });
    
        if (user) {
            res.send('Email already exists');
        }
        else{
            UsersModel.create(req.body);
            const new_user = await UsersModel.findOne({ email });
            req.session.user = {username : new_user.firstname, user_id : new_user._id};
            res.send("Logged")
        }
    } 
    catch (err) {
        console.log(err);
    }

})


app.get("/logout",async (req,res) =>{
    try {
        req.session.destroy(() => {
        res.send("Log out Succ");
        });
    } 
    catch (err) {
        console.error(err);
    }

})

app.get("/api/username", async (req,res) =>{
    if(req.session.user){
        res.status(200).send(req.session.user);
    }
    else{
        res.sendStatus(202);
    }
    }
)

// WorkShops

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/Components/WorkShop Card/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/workshops", async (req,res) =>{
    const workshops = await WorkShopsModel.find();
    res.json(workshops);
}
)






const TestModel = require('./models/Test.js');
app.post("/api/workshop-img", upload.single("workshop_img"), async (req,res) =>{
    const imageName = req.file.filename;
    try {
        await TestModel.create({workshop_img : imageName});
        res.json("Image uploaded");
      } catch (error) {
        res.json({ status: error });
      }
    
})

app.get("/get-image", async (req, res) => {
    try {
        TestModel.find().then((data) => {
        res.send({ data: data });
      });
    } catch (error) {
      res.json({ status: error });
    }
  });

app.get("/api/workshop/:id", async (req,res) =>{
    const id = req.params.id;
    const workshop = await WorkShopsModel.findOne({_id : id});
    
    res.json(workshop);
}
)

// Subscription

app.get("/api/subscription/:id", async (req,res) =>{

    try {
        if(req.session.user){
            const user_id = String(req.session.user.user_id);
            const participations = await ParticipationsModel.findOne({user_id : user_id});
            const workshop = await WorkShopsModel.findById(req.params.id);
            if(participations){
                if(participations.workshop_id.indexOf(req.params.id) == -1){
                    if(workshop.participants == workshop.max_participants){
                        return res.status(201).send("Can't add new Participants");
                    }
                    else{
                        const p = workshop.participants + 1 ;
                        await WorkShopsModel.updateOne({ _id: req.params.id },{ $set: {participants : p} });
                        await ParticipationsModel.updateOne({ _id: participations._id },{ $set: {workshop_id : [...participations.workshop_id,String(workshop._id)]} });
                        return res.status(200).send(`Participants Updated in workshop with id ${workshop.id}`);
    
                    }    
                }
                else{
                    const p = workshop.participants - 1 ;
                    await WorkShopsModel.updateOne({ _id: req.params.id },{ $set: {participants : p} });
                    await ParticipationsModel.updateOne({ _id: participations._id },{ $set: {workshop_id : participations.workshop_id.filter(el => el !== String(workshop._id))} });
                    return res.status(200).send(`Participants cancled for workshop with id ${workshop.id}`);
                }
            }
            else{
                await ParticipationsModel.create({user_id : user_id , workshop_id : String(workshop._id)});
                if (!workshop) {
                    return res.status(404).send('WorkShop not found');
                }
                return res.status(200).send(`Participants Updated in workshop with id ${workshop.id}`);
            }
        }
        else{
            res.sendStatus(207);
        }

        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
)

app.get("/api/checksubscription/:id", async (req,res) =>{
    try {
        if(req.session.user){
            const user_id = String(req.session.user.user_id);
            const participations = await ParticipationsModel.findOne({user_id : user_id});
            if(participations){
                if(participations.workshop_id.indexOf(req.params.id) == -1){
                    res.sendStatus(200);   
                }
                else{
                    res.sendStatus(203);
                }
            }
            else{
                res.sendStatus(203);
            }
        }
        else{
            res.sendStatus(206);
        } 
    } catch (error) {
        res.status(400).send(error.message);
    }
}
)





app.listen(PORT,() =>{
    console.log(`Server listening to port ${PORT}`);
});