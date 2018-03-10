const passport = require('passport');
const passportLocal = require('passport-local');
const bcrypt = require('bcryptjs');

const { findUserByEmail } = require('../repos/users');

function validatePassword({ user, password }) {
  return bcrypt.compare(password, user.password);
}

const localLogin = new passportLocal.Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  (email, password, done) => {
    findUserByEmail(email)
      .then(user => {
        if (!user) {
          const error = { message: 'Incorrect credentials.' };
          return Promise.reject(error);
        }

        return Promise.all([
          user,
          validatePassword({ user, password }),
        ]);
      })
      .then(([user, match]) => {
        if (!match) {
          const error = { message: 'Incorrect credentials.' };
          return Promise.reject(error);
        }

        done(null, user);
        return Promise.resolve();
      })
      .catch(err => {
        done(null, false, err);
      });
  },
);

passport.use(localLogin);
const localStrategyAuth = passport.authenticate('local', { session: false });
module.exports = localStrategyAuth;
