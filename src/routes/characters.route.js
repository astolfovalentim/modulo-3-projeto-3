const route = require('express').Router();
const controllerCharacters = require('../controllers/characters.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const {
  validId,
  validObjectBody,
} = require('../middlewares/character.middleware');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/characters', controllerCharacters.findAllCharactersController);
route.get(
  '/characters/find/:id',
  controllerCharacters.findByIdCharactersController,
);

route.post(
  '/characters/create',
  validObjectBody,
  controllerCharacters.createCharactersController,
);
route.put(
  '/characters/update/:id',
  validId,
  validObjectBody,
  controllerCharacters.updateCharactersController,
);
route.delete(
  '/characters/delete/:id',
  validId,
  controllerCharacters.deleteCharactersController,
);

/* route.get(
  '/characters/search',
  validObjectBody,
  controllerCharacters.findByIdCharactersController,
); */

module.exports = route;
