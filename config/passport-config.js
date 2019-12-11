const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require("../models")

function initialize(passport) {
    const authenticateUser = (username, password, done) => {

        console.log("PASSPORT", user)

        db.Customer.findOne({
            where: {
                username: username
            }
        }).then(async user => {
            if (user === null) {
                return done(null, false, {
                    message: "no user with that name"
                })
            }
            try {
                if (await bcrypt.compare(password, user.dataValues.password)) {
                    return done(null, user);
                } else {
                    return done(null, false, {
                        message: "password incorrect"
                    });
                }
            } catch (e) {
                return done(e);
            }
        })
    }

    passport.use(new LocalStrategy(authenticateUser));

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => db.Customer.findById(id, function (err, user) {
            done(err, user);
        }));
}

module.exports = initialize;