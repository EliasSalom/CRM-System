const express = require("express");
const path = require("path");
const router = express.Router();
//Handlers
const loginhandler = require("./handlers/login");
const signuphandler = require("./handlers/signup");
const forget_passwordhandler = require("./handlers/forget_password");

router.get("/",loginhandler.get)
router.post("/",loginhandler.post)
// router.get("/signin",loginhandler.signin)

router.get("/index",loginhandler.get)
router.post("/index",loginhandler.post)

router.get("/signup",signuphandler.get)
router.post("/signup",signuphandler.post)

router.get("/forget-password",forget_passwordhandler.get)
router.post("/forget-password",forget_passwordhandler.post)

module.exports=(router);