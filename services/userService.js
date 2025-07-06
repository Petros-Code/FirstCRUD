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

const findYoungestUser = () => {
  if (users.length === 0) return null;
  return users.reduce((youngest, user) =>
    user.age < youngest.age ? user : youngest
  );
};

const searchUsersByName = (query) => {
  const lowerQuery = query.toLowerCase();
  return users.filter((user) => user.name.toLowerCase().includes(lowerQuery));
};

const calculateAverageAge = () => {
  if (users.length === 0) return null;
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
};

const findUsersByEmailDomain = (domain) => {
  const lowerDomain = domain.toLowerCase();
  return users.filter((user) => {
    const emailDomain = user.email.split("@")[1]?.toLowerCase();
    return emailDomain === lowerDomain;
  });
};

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
};

const sortUsersByKey = (key) => {
  const validKeys = ["name", "age"];
  if (!validKeys.includes(key)) return null;

  return [...users].sort((a, b) => {
    if (key === "name") {
      return a.name.localeCompare(b.name);
    } else if (key === "age") {
      return a.age - b.age;
    }
  });
};

//#endregion

//#region PUT
const replaceUser = (userId, updatedUser) => {
  const index = users.findIndex((u) => u["user-id"] == userId);
  if (index === -1) return null;
  users[index] = updatedUser;
  return users[index];
}
//#endregion

//#region PATCH
const patchUser = (userId, updatedUser) => {
  const user = users.find((u) => u["user-id"] === userId);
  if (!user) return null;
  Object.assign(user, updatedUser);
  return user;
};
//#endregion

//#region DELETE
const removeUserById = (userId) => {
  const index = users.findIndex((u) =>  u["user-id"] === userId);
  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }
  return false;
};
//#endregion

//#region EXPORTS
export { findUserById, createUserById, replaceUser, patchUser, removeUserById, findYoungestUser, searchUsersByName, calculateAverageAge, findUsersByEmailDomain, sortUsersByKey, };
//#endregion

