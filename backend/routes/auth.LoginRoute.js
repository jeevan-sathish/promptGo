import { Router } from "express";
import { LoginController } from "../controller/auth.LoginController.js";

export const LoginRoute = Router();

LoginRoute.post("/login", LoginController);
console.log("route hit");
