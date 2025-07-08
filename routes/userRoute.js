const router = express.Router();
import express from "express";
import {
    getUserById,
    // postUserById,
    // putUserById,
    // patchUserById,
    // deleteUserById,
} from "../controllers/userController.js";

router.get("/:id", getUserById);



export default router