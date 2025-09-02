import mongoose from "mongoose";
import express from "express";
import {User} from "./models/schema.js";

const app = express();
const PORT = 3000;      

await mongoose.connect('mongodb://localhost:27017/');

app.get("/", async (req, res) => {
    // const newUser = new User({ name: 'Vidhi', age: 20, email: 'vee@gmail.com' });
    // newUser.save();
    let a=await User.findOne({ name: 'Vidhi' });
    console.log(a)
    res.json(a)
    res.send("Hello World!");
});
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
