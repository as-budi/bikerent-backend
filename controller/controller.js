import express from "express";
import { getUsers, register, login } from "../services/users.js";
import { verifyToken } from "../services/verifyToken.js";
import { refreshToken } from "../services/refreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/register', register);
router.post('/login', login);
router.get('/refresh_token', refreshToken);

export default router;