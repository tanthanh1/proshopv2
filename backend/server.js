import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 5006;
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/", (req, res) => res.send("Hello"));

app.get("/api/products", (req, res) => res.json(products));

app.get("/api/products/:id", (req, res) => {
    const product = products.find((product) => product._id === req.params.id);
    res.json(product);
});

app.listen(port, () => console.log("Server OK at port ", port));
