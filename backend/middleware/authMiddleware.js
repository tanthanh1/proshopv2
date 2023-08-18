import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
    let token;

    token = req.cookies.jwt;

    if (token) {
        try {
            // check token true or false
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded);

            req.user = await User.findById(decoded.userId).select("-password");
            console.log("user", req.user);

            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

const admin = asyncHandler(async (req, res, next) => {
    if (req.user && req.user.isAdmin) next();
    else {
        res.status(401);
        throw new Error("Not authorized as an admin");
    }
});

export { protect, admin };
