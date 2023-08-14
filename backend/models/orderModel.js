import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "User",
        },

        orderItems: [
            {
                name: { type: String, required: false },
                qty: { type: Number, required: false },
                image: { type: String, required: false },

                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: false,
                    ref: "Product",
                },
            },
        ],

        shippingAddress: {
            address: { type: String, required: false },
            city: { type: String, required: false },
            // postalCode: { type: String, required: false },
            // country: { type: String, required: false },
        },

        paymentMethod: {
            type: String,
            required: false,
        },
        paymentResult: {
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String },
        },
        itemsPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        taxPrice: {
            type: Number,
            required: false,
            default: 0.0,
        },
        shippingPrice: {
            type: Number,
            required: false,
            default: 0.0,
        },
        totalPrice: {
            type: Number,
            required: false,
            default: 0.0,
        },
        isPaid: {
            type: Boolean,
            required: false,
            default: false,
        },

        paidAt: {
            type: Date,
        },
        isDelivered: {
            type: Boolean,
            required: false,
            default: false,
        },
        deliveredAt: {
            type: Date,
        },
    },
    {
        timestamps: false,
    }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
