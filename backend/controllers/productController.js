import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
    
    const products = await Product.find({});

    // res.status(404).json({ message: "404 error not found" });
    // const error = new Error("Not found");
    // error.status = 404;
    // throw error;
    // throw new Error("Product not found");
    res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ message: "Product not found" });
});

export { getProducts, getProductById };
