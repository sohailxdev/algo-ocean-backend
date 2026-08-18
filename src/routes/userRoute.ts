import express from "express";

import {
  createUserController,
  getUsersController,
} from "../controller/userController";

export const router = express.Router();

router.post("/", createUserController);

router.get("/", getUsersController);
