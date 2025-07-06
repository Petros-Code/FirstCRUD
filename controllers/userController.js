//#region IMPORTS --------------------------
// import users from "../models/userModel.js";
import {
    findUserById,
    createUserById,
    replaceUser,
    patchUser,
    removeUserById,
    findYoungestUser,
    searchUsersByName,
    calculateAverageAge,
    findUsersByEmailDomain,
    sortUsersByKey,
} from "../services/userService.js"
//#endregion --------------------------------

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

const getYoungestUser = (req, res) => {
  const youngest = findYoungestUser();
  if (youngest) {
    res.json(youngest);
  } else {
    res.status(404).json({ error: "Aucun utilisateur trouvé." });
  }
};

const searchUsers = (req, res) => {
  const nameQuery = req.query.name;
  if (!nameQuery) {
    return res.status(400).json({ error: "Paramètre 'name' requis dans la requête." });
  }

  const matchedUsers = searchUsersByName(nameQuery);
  if (matchedUsers.length > 0) {
    res.json(matchedUsers);
  } else {
    res.status(404).json({ message: "Aucun utilisateur correspondant." });
  }
};

const getAverageAge = (req, res) => {
  const average = calculateAverageAge();
  if (average !== null) {
    res.json({ averageAge: parseFloat(average.toFixed(2)) });
  } else {
    res.status(404).json({ error: "Aucun utilisateur disponible pour le calcul." });
  }
};

const getUsersByDomain = (req, res) => {
  const domain = req.params.domain;
  const matchedUsers = findUsersByEmailDomain(domain);
  if (matchedUsers.length > 0) {
    res.json(matchedUsers);
  } else {
    res.status(404).json({ message: `Aucun utilisateur avec le domaine '${domain}'.` });
  }
};

//#endregion -------------------------------

//#region POST -----------------------------
const postUserById = (req, res) => {
    const newUser = createUserById(req.body);
    res.status(201).json({ message: "Utilisateur créé avec succès", newUser });
};

const sortUsers = (req, res) => {
  const { sortBy } = req.body;

  const sortedUsers = sortUsersByKey(sortBy);
  if (!sortedUsers) {
    return res.status(400).json({
      error: "Clé de tri invalide. Utilisez 'name' ou 'age'.",
    });
  }

  res.json(sortedUsers);
};

//#endregion -------------------------------

//#region PUT ------------------------------
const putUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;

    const requiredFields = ["user-id", "name", "age", "email"];
    const missingFields =  requiredFields.filter((field) => !(field in updatedUser));
    if (missingFields.length > 0) {
        return res.status(404).json({ error: "Champ(s) Manquant(s)", missingFields });
    }

    const user = replaceUser(userId, updatedUser);
    if (user) {
        res.json({ message : "Utilisateur remplacé avec succès", user });
    } else {
        res.status(404)({ error: "Utilisateur introuvable" });
    }
};
//#endregion -------------------------------

//#region PATCH ----------------------------
const patchUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = patchUser(userId, req.body);
    if (updatedUser) {
        res.json({ message: "Utilisateur mis à jour", user: updatedUser });
    } else {
        res.status(404).json({ error: "Utilisateur non trouvé" });
    }
}
//#endregion -------------------------------

//#region DELETE ---------------------------
const deleteUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const success = removeUserById(userId);
    if (success) {
        res.send("Utilisateur supprimé");
    } else {
        res.status(404).send("Utilisateur non trouvé");
    }
};
//#endregion -------------------------------

//#region EXPORTS --------------------------
export {
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
};
//#endregion ---------------------------------