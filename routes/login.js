const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();
const user = {
  username: "Dorothy Russel",
  password: "FRG3T28Y88H8W6GRR",
};

router.post("/", async (req, res, next) => {
  console.log(req.body);
  if (
    req.body.username === user.username &&
    req.body.password === user.password
  ) {
    const body = { _id: "34", email: "email" };
    let token = jwt.sign({ user: body }, "Secret_Key");

    return res.json({ token });
  }
});

var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "Secret_Key";

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "Secret_Key",
    },
    function (jwtPayload, done) {
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.

      return done(null, "datos");
    }
  )
);

module.exports = router;
