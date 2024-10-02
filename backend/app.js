const express = require("express");
const app = express();
const collection = require("./mongo"); // No need to redefine 'collection'
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
    res.send("Hello World");
});

app.post("/", async (req, res) => {
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});

app.post("/signup", async (req, res) => {
    const { email, password, username, phone } = req.body;

    const data = {
        email: email,
        password: password,
        username: username,
        phone: phone,
    };

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
            await collection.insertMany([data]);
        }
    } catch (e) {
        res.json("fail");
    }
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

const mongoose = require("mongoose");
mongoose
    .connect("mongodb://0.0.0.0:27017/hotel-booking-user-info")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(() => {
        console.log("Connection failed");
    });
