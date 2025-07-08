//#region IMPORTS --------------------------
// import users from "../models/userModel.js";
import {
    findUserById,
    // createUserById,
    // replaceUserById,
    // updateUserById,
    // removeUserById,
} from "../services/userService.js"
//#endregion ----------------------------------

//#region GET ------------------------------
const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = findUserById(userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send("Utilisateur non trouvé");
    }
};
//#endregion -------------------------------

//#region POST ------------------------
//#endregion -------------------------------

//#region PUT ------------------------
//#endregion -------------------------------

//#region PATCH ------------------------
//#endregion -------------------------------

//#region DELETE ------------------------
//#endregion -------------------------------

//#region EXPORTS ----------------------------
export {
    getUserById,
    // postUserById,
    // putUserById,
    // patchUserById,
    // deleteUserById,
};
//#endregion ---------------------------------