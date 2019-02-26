/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// api/controllers/users.js

import jwt from 'jsonwebtoken';
import User from '../models/users';
import auth from '../../auth/index';
import models from '../models';


const validUser = (user) => {
  const validEmail = /(.+)@(.+){2,}\.(.+){2,}/.test(user.email) && user.email.trim() !== '';

  const validPassword = typeof user.password === 'string' && user.password.trim() !== '' && user.password.trim().length >= 6;

  return validEmail && validPassword;
};


const UsersController = {
  signup: (req, res, next) => {
    const user = new User(null, req.body.name, req.body.email, req.body.password);

    // check validity of user name & password
    if (validUser(req.body)) {
      models.User.findAll()
        .then((response) => {
          const userIds = response.map(value => value.id);
          const userNames = response.map(value => value.name);
          const lastUserId = Math.max(...userIds);
          if (userNames.includes(user.name)) {
            res.status(400).json({
              status: 400,
              error: 'Email already used',
            });
          } else {
            user.id = lastUserId + 1;
            // save user in User table in DB
            models.User.create(user)
              .then((result) => {
                res.status(200).json({
                  status: 200,
                  message: 'New User created',
                  result,
                });
              });
          }
        });
    } else {
    // send an error
      res.status(401).json({
        message: 'Signup Failed',
        error: 'Signup Failed',
        reasons: 'Invalid Email/Password must be minimum of 6 characters',
      });
    }
  },


  login: (req, res, next) => {
    const user = { email: req.body.email, password: req.body.password };

    if (user.email !== '' && user.password !== '') {
      models.User.findAll()
        .then((response) => {
          const userEmails = response.map(value => value.email);
          const userIndex = userEmails.indexOf(user.email);
          console.log(userEmails);
          console.log(userIndex);
          const newUser = response[userIndex];
          console.log(newUser);
          if (newUser.email === user.email) {
            if (newUser.password === user.password) {
              jwt.sign({ user }, 'secretKey', { expiresIn: '1min' }, (err, token) => {
                if (err) {
                  res.status(400).json({
                    status: 400,
                    error: 'Authorization failed',
                  });
                }
                res.status(200).json({
                  status: 200,
                  newUser,
                  message: 'Login successful',
                  token,
                });
              });
            /* end of jwt signing */
            } else {
              res.status(400).json({
                status: 400,
                error: 'Invalid password',
              });
            }
          } else {
            res.status(400).json({
              status: 400,
              error: 'Invalid email',
            });
          }
        });
    } else {
      res.status(400).json({
        status: 400,
        error: 'Please enter your email & password',
      });
    }
  },


  admin: (req, res, next) => {
    // const userList = usersRecord.map(user => user);

    jwt.verify(req.token, 'secretKey', (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.status(200).json({
          status: 200,
          message: 'Registered users displayed',
          // list: userList,
        });
      }
    });
  },
};

export default UsersController;
