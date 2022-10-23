import express from "express";
import { getUsers } from "../services/users.js";

const router = express.Router();

router.get('/user', getUsers);

export default router;