import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import {
    getProducts,
    getProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.route("/:id").get(getProductById);

// router.route("/").get(getProducts);

export default router;
