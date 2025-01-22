const express = require("express");
const passport = require("passport");

const router = express.Router();

const {
  googleAuthRedirect,
  googleAuthCallback
} = require("../controllers/googleAuthController.js");

router.route("/").get(googleAuthRedirect);

router.route("/callback")
  .get(passport.authenticate("google", { failureRedirect: "/auth/user/register" }), googleAuthCallback);

module.exports = router;