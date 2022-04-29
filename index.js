require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/database/database');
const routes = require('./src/routes/characters.route');
const userRoute = require('./src/users/users.route');
const authRoute = require('./src/auth/auth.route');
const jwtVerify = require('./src/auth/auth.middleware');

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.get('/', jwtVerify, (req, res) => {
  res.send({ message: 'Hello, world!' });
});

app.use('/', routes);

app.use('/users', userRoute);

app.use('/auth', authRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
