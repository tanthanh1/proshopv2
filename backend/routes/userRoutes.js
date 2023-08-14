import express from "express";
import users from "../data/users.js";
import {
    authUser,
    logoutUser,
    getUserProfile,
    registerUser,
    updateUserProfile,
    getUsers,
    deleteUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const userRoutes = express.Router();

// userRoutes.get("/", (req, res) => {
//     res.json(users);
// });
userRoutes.get("/", protect, admin, getUsers);
userRoutes.delete("/:id", protect, admin, deleteUser);

userRoutes.post("/auth", authUser);
userRoutes.post("/logout", protect, logoutUser);
userRoutes
    .route("/profile")
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
userRoutes.post("/register", registerUser);

export default userRoutes;
