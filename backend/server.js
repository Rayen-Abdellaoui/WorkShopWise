const express  = require('express');
const session = require('express-session');


const PORT = 5555;
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./models/Users.js')

const app = express();
app.use(session({
    secret: "securite sa7bi",
    resave:false,
    saveUninitialized: false,
}))
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/PPP")
.then(console.log("Connected to Database"));

const isLoggedIn = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
    next();
};

app.post('/login',isLoggedIn, async (req, res) => {
    const { email, password } = req.body;

    const isValid = await validateCredentials(username, password);

    if (isValid) {
        req.session.isLoggedIn = true;
        req.session.email = email;
        res.send({ message: 'Login successful!' });
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
});


app.post("/sign-in",async (req,res) =>{
    UsersModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
})



app.listen(PORT,() =>{
    console.log(`Server listening to port ${PORT}`);
});