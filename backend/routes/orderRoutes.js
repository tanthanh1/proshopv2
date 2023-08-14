import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";

import {
    createOrder,
    getOrders,
    deleteOrderById,
    updateOrderToDelivered,
} from "../controllers/orderController.js";

const orderRoutes = express.Router();

orderRoutes
    .route("/")
    .post(protect, createOrder)
    .get(protect, admin, getOrders);

orderRoutes.route("/:id").delete(deleteOrderById);
orderRoutes.put("/:id/deliver", updateOrderToDelivered);

export default orderRoutes;
