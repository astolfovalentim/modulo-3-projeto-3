const charactersService = require('../services/characters.service');
const mongoose = require('mongoose');

const findAllCharactersController = async (req, res) => {
  const characters = await charactersService.findAllCharactersService();

  if (characters.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma personagem cadastrada!' });
  }
  res.send(characters);
};

const findByIdCharactersController = async (req, res) => {
  const idParam = req.params.id;

  const chosenCharacters = await charactersService.findByIdCharactersService(
    idParam,
  );

  if (!chosenCharacters) {
    return res.status(404).send({ message: 'Personagem não encontrada!' });
  }

  res.send(chosenCharacters);
};

const createCharactersController = async (req, res) => {
  const character = req.body;
  const newCharacter = await charactersService.createCharactersService(
    character,
  );
  res.status(201).send(newCharacter);
};

const updateCharactersController = async (req, res) => {
  const idParam = req.params.id;
  const editCharacter = req.body;
  const updateCharacter = await charactersService.updateCharactersService(
    idParam,
    editCharacter,
  );
  res.send(updateCharacter);
};

const deleteCharactersController = async (req, res) => {
  const idParam = req.params.id;

  const chosenCharacters = charactersService.findByIdCharactersService(idParam);

  if (!chosenCharacters) {
    return res.status(404).send({ message: 'Personagem não encontrada!' });
  }

  await charactersService.deleteCharactersService(idParam);
  res.send({ message: 'Personagem deletada com sucesso!' });
};

module.exports = {
  findAllCharactersController,
  findByIdCharactersController,
  createCharactersController,
  updateCharactersController,
  deleteCharactersController,
};
