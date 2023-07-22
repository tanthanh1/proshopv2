import express from "express";
import users from "../data/users.js";
import { authUser, logoutUser } from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const userRoutes = express.Router();

// userRoutes.get("/", (req, res) => {
//     res.json(users);
// });

userRoutes.post("/auth", authUser);
userRoutes.post("/logout", protect, logoutUser);

export default userRoutes;
