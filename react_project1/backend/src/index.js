import databaseConnect from "../db/db.js";
import { app } from "../app.js";
import dotenv from "dotenv"

dotenv.config();


const PORT = process.env.PORT || 3000;

databaseConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Database connected successfully at port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Something Wrong!!!", err);
    });

