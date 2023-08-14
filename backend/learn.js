import express from "express";
import router from "./routes/productRoutes.js";

const app = express();

// app.use("/:id", (req, res, next) => {
//     console.log(req.params.id);
//     if (req.params.id === "11") return next();
//     else res.send("Stop here");
// });

app.use("/product", router);

app.get("/:id", (req, res) => {
    res.send("Hello world, Your id is " + req.params.id);
});

app.listen(5005, () => console.log("Server is running at port 5005"));

// ProductForm.js
