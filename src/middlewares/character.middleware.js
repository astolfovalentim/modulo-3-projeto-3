const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const character = req.body;
  if (!character || !character.name || !character.imageUrl) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos da personagem!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
