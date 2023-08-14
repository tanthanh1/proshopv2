import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Person from "./models/personModel.js";

dotenv.config();
connectDB();

// const newPerson = new Person({
//     name: "Luong Tan Thanh",
//     age: 36,
// });

// newPerson
//     .save()
//     .then((savedPerson) => console.log("Person created", savedPerson));

const newPerson = await Person.create({
    name: "Luong Tan Thanh",
    age: 36,
});

console.log(newPerson);
