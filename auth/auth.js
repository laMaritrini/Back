const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
// const JWTstrategy = require("passport-jwt").Strategy;
// const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
       
        if (username ) {
          return done(null, user, { message: "Logged in Successfully" });
        }
        return done(null, false, {
          message: "User not found or Wrong Password",
        });
      } catch (error) {
        console.error(error);
        return done(error);
      }
    }
  )
);

// passport.use(
//   new JWTstrategy(
//     {
//       secretOrKey: "Secret_Key",
//       jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//     },
//     async (token, done) => {
//       try {
//         return done(null, token.user);
//       } catch (error) {
//         done(error);
//       }
//     }
//   )
// );

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
