import express from "express";
import {
    showUsers,
    createUser,
} from "../controllers/userCont.js";

import { loginUser } from "../controllers/authCont.js";

const router = express.Router();
//users
router.get("/users", showUsers);
router.post("/user", createUser);
router.post('/login', loginUser);
// router.post('/protected', validateToken);

export default router;