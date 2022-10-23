import express from "express";
import { getUsers, register } from "../services/users.js";

const router = express.Router();

router.get('/user', getUsers);
router.post('/register', register);

export default router;