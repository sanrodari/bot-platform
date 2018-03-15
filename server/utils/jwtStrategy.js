const passport = require('passport');
const passportJwt = require('passport-jwt');

const { findUserById } = require('../repos/users');

const jwtOptions = {
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const jwtLogin = new passportJwt.Strategy(
  jwtOptions,
  (payload, done) => {
    findUserById(payload.sub)
      .then(user => {
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      })
      .catch(err => done(err, false));
  },
);

passport.use(jwtLogin);
const requireAuth = passport.authenticate('jwt', { session: false });
module.exports = requireAuth;
