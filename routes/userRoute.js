import express from "express";
const router = express.Router();
import {
    getUserById,
    postUserById,
    // putUserById,
    // patchUserById,
    // deleteUserById,
} from "../controllers/userController.js";

router.get("/:id", getUserById);

router.post("/", postUserById);



export default router