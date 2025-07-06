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
const createUserById = (data) => {
  const lastId = users.length > 0 ? Math.max(...users.map((u) => u["user-id"])) : 0;
  const newUser = {
    "user-id": lastId + 1,
    name: data.name,
    age: data.age,
    email: data.email,
  };
  users.push(newUser);
  return newUser;
}
//#endregion

//#region PUT

//#endregion

//#region PATCH
//#endregion

//#region DELETE
//#endregion

//#region EXPORTS
export { findUserById, createUserById };
//#endregion


// , createUserById, replaceUserById, updateUserById, removeUserById