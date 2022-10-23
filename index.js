import express from "express";
import db from "./config/database.js"
import router from "./controller/controller.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();

try {
     await db.authenticate();
     console.log("Database connected!");
} catch (error) {
     console.log(error);
}

app.use(express.json());
app.use(router);

app.listen(3001, () => console.log("Server running at port 3001"));