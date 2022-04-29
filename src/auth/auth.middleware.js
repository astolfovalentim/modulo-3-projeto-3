require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findByIdUserService } = require('../users/users.service');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(req.headers.authorization);

  if (!authHeader) {
    return res.status(401).send({ message: 'O token não foi informado!' });
  }

  const parts = authHeader.split(' '); // ["Bearer", "<token>"]

  console.log(parts.length);
  if (parts.length !== 2) {
    return res.status(401).send({ message: 'Token inválido!' });
  }

  const [scheme, token] = parts;

  console.log(scheme);
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: 'Token malformatado!' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    const user = await findByIdUserService(decoded.id);
    console.log(user.id);
    console.log(user.name);
    if (err || !user || !user.id) {
      return res.status(401).send({ message: 'Token inválido!' });
    }

    req.userId = user.id;

    return next();
  });
};
