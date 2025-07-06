import express from "express";
const router = express.Router();
import {
    getUserById,
    postUserById,
    putUserById,
    patchUserById,
    deleteUserById,
    getYoungestUser,
    searchUsers,
} from "../controllers/userController.js";

router.get("/youngest", getYoungestUser);
router.get("/search", searchUsers)
router.get("/:id", getUserById);

router.post("/", postUserById);

router.put("/:id", putUserById);

router.patch("/:id", patchUserById);

router.delete("/:id", deleteUserById)



export default router