import express from "express";
const userAuthRouter = express.Router();
import { sql } from "../db.js";

import validateInfo from "../middlewares/validateInfo.js";
import authorization from "../middlewares/authorization.js";
import controller from "../controllers/user.controller.js";
import passwordController from "../controllers/password.controller.js";

/*const validateInfo = require("../middlewares/validateInfo.js");
const authorization = require("../middlewares/authorization.js");
const controller = require("../controllers/user.controller.js");
const passwordController = require("../controllers/password.controller.js");*/

userAuthRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    const [foundTodo] = await sql`SELECT * FROM users WHERE user_id = ${Number(id)};`;
  
    if (foundTodo) {
      res.status(200).send(foundTodo);
    } else {
      res.status(404).send("users not found");
    }
  });

//REGISTER ROUTE
//userAuthRouter.get("/register", validateInfo, controller.user_register);
userAuthRouter.post("/register", async (req, res) => {
    const { firstname, lastname, email, phone, password } = req.body;
    if (!firstname || !lastname || !email || !phone || !password) {
        return res.status(400).json({
          error: "Missing credentials",
        });
    }
  });

//LOGIN ROUTE
userAuthRouter.post("/login", validateInfo, controller.user_login);

//USER TOKEN ROUTE
userAuthRouter.get("/verify-token", authorization, controller.user_token_verify);

//PASSWORD ROUTE
userAuthRouter.post("/forgot-password", passwordController.forgot_password);
userAuthRouter.patch("/reset-password", passwordController.reset_password);

export default userAuthRouter;