import mongoose from "mongoose";

const personSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
});

const Person = mongoose.model("Person", personSchema);

export default Person;
