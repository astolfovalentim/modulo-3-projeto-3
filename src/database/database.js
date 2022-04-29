const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDb ATLAS CONECTADO');
    })
    .catch((err) => {
      return console.log(`Erro ao conectar com o banco: ${err}`);
    });
};

module.exports = connectToDatabase;
