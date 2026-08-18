import express from "express";
import { createUserController, getUsersController, } from "../controller/userController.js";
export const router = express.Router();
router.post("/", createUserController);
router.get("/", getUsersController);
