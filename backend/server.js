const express  = require('express');
const session = require('express-session');


const PORT = 5555;
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./models/Users.js');
const WorkShopsModel = require('./models/WorkShops.js');

const app = express();
app.use(session({
    secret: "securite sa7bi",
    resave:false,
    saveUninitialized: false,
    cookie: { secure: false } 
}))
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/PPP")
.then(console.log("Connected to Database"));

/*const isLoggedIn = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
    next();
};*/

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
                req.session.user = user.firstname;
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
            req.session.user = firstname;
            UsersModel.create(req.body);
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
            res.send('You have been logged out.');
        });
    } 
    catch (err) {
        console.error(err);
    }

})

app.get("/api/username", (req,res) =>{
        res.send(req.session.user);
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




app.listen(PORT,() =>{
    console.log(`Server listening to port ${PORT}`);
});