//#region IMPORTS
import users from "../models/userModel.js"
//#endregion

//#region FACTORISATION
const getUserById = (userId) => {
  return users.find((u) => u["user-id"] == userId);
};
//#endregion

//#region GET
const findUserById = (userId) => {
    return getUserById(userId);
}
//#endregion

//#region POST
//#endregion

//#region PUT
//#endregion

//#region PATCH
//#endregion

//#region DELETE
//#endregion

//#region EXPORTS
export { findUserById };
//#endregion


// , createUserById, replaceUserById, updateUserById, removeUserById