const express  = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { connectToRabbitMQ, consumeFromQueue,publishToQueue } = require('./rabbitmq');


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

// Upload Images
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

//User login
app.post("/login",  async(req, res) => {
    const { login_email, login_password } = req.body;
    UsersModel.findOne({email : login_email})
    .then(user =>{
        if(user){
            if(user.password === login_password){
                req.session.user = {username : user.firstname, user_id : user._id, role : user.role};
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

// Club login
app.post("/club/login",  async(req, res) => {
    const { login_email, login_password } = req.body;
    ClubModel.findOne({email : login_email})
    .then(club =>{
        if(club){
            if(club.password === login_password){
                req.session.user = {username : club.name, user_id : club._id,role : club.role};
                res.send(req.session.user);
            }
            else
                res.send("Wrong Password");
        }
        else{
            res.send("No Club with this email")
        }
    })
    .catch(err => console.log(err));

});

//User Sign in 
app.post("/sign-in",async (req,res) =>{
    const { firstname ,lastname, email ,phone ,password } = req.body;
    try {
        const user = await UsersModel.findOne({ email });
    
        if (user) {
            res.send('Email already exists');
        }
        else{
            await UsersModel.create(req.body);
            const new_user = await UsersModel.findOne({ email });
            req.session.user = {username : new_user.firstname, user_id : new_user._id,role : new_user.role};
            res.send("Logged")
        }
    } 
    catch (err) {
        console.log(err);
    }

})

//Club Sign in
app.post("/club/sign-in",upload.single("club_img"),async (req,res) =>{
    const { club_name ,club_img,email,password } = req.body;
    const imageName = req.file.filename;
    try {
        const club = await ClubModel.findOne({ email });
    
        if (club) {
            res.send('Email already used');
        }
        else{
            await ClubModel.create({club_name : club_name , club_img : imageName , email : email , password : password});
            const new_club = await ClubModel.findOne({ email });
            req.session.user = {username : new_club.name, user_id : new_club._id,role : new_club.role};
            res.send("Logged")
        }
    } 
    catch (err) {
        console.log(err);
    }

})

//Logout
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

//check if user logged
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



// Return all workshops
app.get("/workshops", async (req,res) =>{
    const workshops = await WorkShopsModel.find();
    res.json(workshops);
}
)

// Return myworkshop
app.get("/api/myworkshop", async (req, res) => {
    try {
        if (req.session.user) {
            const user_id = String(req.session.user.user_id);
            const participations = await ParticipationsModel.findOne({ user_id: user_id });

            if (participations && participations.workshop_id.length > 0) {
                const workshopPromises = participations.workshop_id.map(el => {
                    return WorkShopsModel.findOne({ _id: el });
                });
                const workshops = await Promise.all(workshopPromises);

                return res.json(workshops);
            } else {
                return res.status(207).send('No workshops participated in');
            }
        } else {
            return res.send('login first');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Delete myworkshop
app.get("/api/delete-myworkshop/:id", async (req, res) => {
    try {
        if (req.session.user) {
            const user_id = String(req.session.user.user_id);
            const participations = await ParticipationsModel.findOne({ user_id: user_id });

            if (participations && participations.workshop_id.length > 0) {
                const result = await ParticipationsModel.updateOne(
                    { user_id: user_id },
                    { $pull: { workshop_id: req.params.id } })
                return res.send("Workshop deleted");
            } else {
                return res.status(207).send('No workshops participated in');
            }
        } else {
            return res.send('login first');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

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

// Return one workshop by id
app.get("/api/workshop/:id", async (req,res) =>{
    const id = req.params.id;
    const workshop = await WorkShopsModel.findOne({_id : id});
    res.json(workshop);
}
)

// Subscription

app.get("/api/subscription/:id", async (req, res) => {
    try {
        if (req.session.user) {
            const user_id = String(req.session.user.user_id);
            const workshop_id = req.params.id;
            const message = { user_id, workshop_id };

            await publishToQueue('subscriptionQueue', message);
            res.status(200).send("Subscription request received. Processing...");

        } else {
            res.sendStatus(207);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

async function startApp() {
    try {
        const { connection, channel } = await connectToRabbitMQ();
        consumeFromQueue(channel);
        console.log("RabbitMQ consumer started.");

        app.listen(PORT,() =>{
            console.log(`Server listening to port ${PORT}`);
        });

        // Gracefully close RabbitMQ connection on app termination
        process.on('SIGINT', async () => {
            await channel.close();
            await connection.close();
            console.log('RabbitMQ connection closed');
            process.exit(0);
        });
    } catch (error) {
        console.error("Failed to start the application:", error);
    }
}

startApp();

// Check user workshops
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





