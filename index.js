const express = require("express")

const app = express();
const port = 5000;

// Welcome Route
app.get("/welcome", (req, res) => {
    res.send("Welcome to Express Learning");
});


// Student Route (JSON Response)
app.get("/student", (req, res) => {
    res.json({
        Name: "Rajib",
        Course: "MERN Stack",
        Batch: 13
    });
});

// GET Request With URL Query
app.get("/search", (req, res) => {
    res.json(req.query);
});


// Middleware
app.use(express.json());

// POST Route
app.post("/register", (req, res) => {
    res.json(req.body);
});


// POST Request With URL Query
app.post("/product", (req, res) => {
    res.json(req.query);
});


// POST Request With Header Properties
app.post("/login", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    res.json({
        username,
        password
    });
});


app.listen(port, ()=>{
    console.log(`Welcome to Express Learning at http://localhost:${port}`);
})



