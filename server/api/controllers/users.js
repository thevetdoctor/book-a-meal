/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// api/controllers/users.js

import jwt from 'jsonwebtoken';
import User from '../models/users';
import auth from '../auth/index';


const usersRecord = [{
  id: 1,
  name: 'obafemi',
  email: 'thevetdoctor@gmail.com',
  password: '123456',
  isAdmin: true,
}, {
  id: 2,
  name: 'demilade',
  email: 'demi@gmail.com',
  password: 'demi',
  isAdmin: false,
}];

const validUser = (user) => {
  const validEmail = /(.+)@(.+){2,}\.(.+){2,}/.test(user.email) && user.email.trim() !== '';

  const validPassword = typeof user.password === 'string' && user.password.trim() !== '' && user.password.trim().length >= 6;

  return validEmail && validPassword;
};


const UsersController = {
  signup: (req, res, next) => {
    const user = new User(usersRecord.length + 1, req.body.name, req.body.email, req.body.password);

    // check validity of user name & password
    if (validUser(req.body)) {
      if (usersRecord.find(val => val.email === user.email)) {
        console.log(user.email);
        console.log(usersRecord);
        res.status(401).json({
          error: 'Email already used',
        });
      } else {
        // save user in usersRecord
        usersRecord.push(user);

        res.status(200).json({
          message: 'New User created',
          user,
        });
      }
    } else {
    // send an error
      res.status(401).json({
        error: 'Signup Failed',
        reasons: 'Invalid Email/Password must be minimum of 6 characters',
      });
    }
  },


  login: (req, res, next) => {
    const user = { email: req.body.email, password: req.body.password };
    const userArray = [];
    let position = 0;

    if (user.email !== '' && user.password !== '') {
      const contain = usersRecord.map(val => val.email.trim());
      if (contain.includes(user.email)) {
        position = contain.indexOf(user.email);
      }
      userArray.push(usersRecord[position].email);
      userArray.push(usersRecord[position].password);
      if (user.email === userArray[0].trim()) {
        if (user.password === userArray[1].trim()) {
          jwt.sign({ user }, 'secretKey', { expiresIn: '1min' }, (err, token) => {
            if (err) {
              res.status(400).json({
                error: 'Authorization failed',
              });
            }
            res.status(200).json({
              message: 'Login successful',
              token,
            });
          });
          /* end of jwt signing */
        } else {
          res.status(400).json({
            error: 'Invalid password',
          });
        }
      } else {
        res.status(400).json({
          error: 'Invalid email',
        });
      }
    } else {
      res.status(400).json({
        error: 'Please enter your email & password',
      });
    }
  },


  admin: (req, res, next) => {
    const userList = usersRecord.map(user => user);

    jwt.verify(req.token, 'secretKey', (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.status(200).json({
          status: 200,
          message: 'Registered users displayed',
          list: userList,
        });
      }
    });
  },
};

export default UsersController;
