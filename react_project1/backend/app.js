import express from "express";
import {User} from "./models/user.model.js"
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

// Fix for __dirname (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Serve all static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "../public/loginPage")));

// Route: Show login page
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/loginPage/index.html"));
});

app.post("/save", async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.json({
            message: "User saved successfully!",
            data: user
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Start server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});

export { app };