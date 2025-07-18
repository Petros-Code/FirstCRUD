import express from "express";
import userRoute from "./routes/userRoute.js"

const app = express();
app.use(express.json());
const port = 3000;

//#region Routes--------------------------------------------------------------
app.get("/", (req, res) => {
    res.send("Bienvenue sur le serveur.")
});

app.use("/users", userRoute);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message : "Route non trouvée. Vérifiez l'URL et réessayez."
    });
});

//#endregion ------------------------------------------------------------------

app.listen(port, () => {
    console.log(`Le Serveur tourne actuellement sur: http://localhost:${port}`)
});