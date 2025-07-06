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
    getAverageAge,
    getUsersByDomain,
    sortUsers,
} from "../controllers/userController.js";

router.post("/", postUserById);
router.post("/sort", sortUsers);


router.get("/youngest", getYoungestUser);
router.get("/search", searchUsers);
router.get("/average-age", getAverageAge)
router.get("/domain/:domain", getUsersByDomain);
router.get("/:id", getUserById);

router.put("/:id", putUserById);

router.patch("/:id", patchUserById);

router.delete("/:id", deleteUserById)



export default router