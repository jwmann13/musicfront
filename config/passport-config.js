const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, customer) {
  const authenticateUser = (req, username, password, done) => {
    customer
      .findOne({
        where: {
          username: username
        }
      })
      .then(async user => {
        // console.log("PASSPORT", user);
        if (user === null) {
          return done(null, false, {
            msg: "no user with that name"
          });
        }
        try {
          if (await bcrypt.compare(password, user.dataValues.password)) {
            return done(null, user.dataValues);
          } else {
            return done(null, false, {
              msg: "password incorrect"
            });
          }
        } catch (e) {
          return done(e);
        }
      });
  };

  passport.use(
    "local",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      authenticateUser
    )
  );

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) =>
    customer
      .findOne({
        where: {
          id: id
        }
      })
      .then(user => {
        done(null, user);
      })
  );
}

module.exports = initialize;
