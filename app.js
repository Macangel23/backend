const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Handle CORS in express - Middleware
app.use(function(req,res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); // If using .fetch and not axios
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// database connect
const uri = ""; //mongo atlas
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected")
}).catch((error) => console.log(error));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log("running");
    res.send("the app is running now!");
});

const TodosRoute = require('./routes/Todos');
    app.use('/todos',TodosRoute);

app.listen(3000, () => {
    console.log("Listening on port 3000")
});