const character = require('../models/Characters');

const findAllCharactersService = async () => {
  const characters = await character.find();
  return characters;
};

const findByIdCharactersService = async (idParam) => {
  const oneCharacter = await character.findById(idParam);
  return oneCharacter;
};

const createCharactersService = async (newCharacter) => {
  const createCharacter = await character.create(newCharacter);
  return createCharacter;
};

const updateCharactersService = async (idParam, editCharacter) => {
  const updateCharacter = await character.findByIdAndUpdate(
    idParam,
    editCharacter,
  );
  return [updateCharacter, editCharacter];
};

const deleteCharactersService = async (idParam) => {
  return await character.findByIdAndDelete(idParam);
};

module.exports = {
  findAllCharactersService,
  findByIdCharactersService,
  createCharactersService,
  updateCharactersService,
  deleteCharactersService,
};
