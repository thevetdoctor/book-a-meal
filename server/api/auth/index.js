/* eslint-disable dot-notation */
/* eslint-disable no-console */
// api/auth/index.js

import jwt from 'jsonwebtoken';


const auth = (req, res, next) => {
  console.log(req.headers.authorization);
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;

    next();
  } else {
    res.status(403).json({
      message: 'Authentication failed',
    });
  }
};

export default auth;
