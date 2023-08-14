import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const createOrder = asyncHandler(async (req, res) => {
    const { paymentMethod } = req.body;
    console.log("body", req.body);
    console.log("user", req.user);

    //  cach 1
    // const newOrder = await Order.create(req.body);

    const newOrder = await Order.create({ ...req.body, user: req.user._id });

    if (newOrder) {
        res.json(newOrder);
    }
});

const getOrders = asyncHandler(async (req, res) => {
    //  cach 1
    // const newOrder = await Order.create(req.body);

    const orders = await Order.find({});

    res.json(orders);
});

const deleteOrderById = asyncHandler(async (req, res) => {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (order) {
        await Order.deleteOne({ _id: order._id });
        res.json({
            message: "Order removed",
        });
    } else {
        res.status(404);
        throw new Error("Order not found");
    }
});

const updateOrderToDelivered = asyncHandler(async (req, res) => {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();
        const updateOrder = await order.save();
        res.json(updateOrder);
    } else {
        res.status(404);
        throw new Error("Order not found");
    }
});

export { createOrder, getOrders, deleteOrderById, updateOrderToDelivered };
