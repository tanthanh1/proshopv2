import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import productRouters from "./routes/productRoutes.js";
import userRouters from "./routes/userRoutes.js";
import orderRouters from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const port = process.env.PORT || 5006;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Add Access-Control-Allow-Origin to request
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, GET, OPTIONS,DELETE"
    );
    // res.header("Access-Control-Allow-Credentials");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use("/api/products", productRouters);
app.use("/api/users", userRouters);
app.use("/api/orders", orderRouters);

if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "/frontend/build")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => res.send("API is running"));
}

app.use(notFound);
app.use(errorHandler);

// app.get("/api/products", (req, res) => res.json(products));

// app.get("/api/products/:id", (req, res) => {
//     const product = products.find((product) => product._id === req.params.id);
//     res.json(product);
// });

app.listen(port, () => console.log("Server OK at port ", port));
