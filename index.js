/** Enviroment variables */
const { NODE_ENV, PORT } = require('./config/config');

/** External Modules **/
const express = require("express");
const cors = require('cors');
require('express-async-errors');

/** Internal modules **/
const authController = require('./controllers/authController');

/** Express setup **/
const app = express();
app.use(cors());
app.use(express.json());

/** Express routing **/
app.use('/api/', authController);


/** Error handling */
app.use((err, req, res, next) => {
  res.status(500).send({error: err.message});

  next(err);
});

app.listen(PORT || 5000, () => console.log(`Server is running in ${NODE_ENV} environment, on PORT ${PORT || 5000}`));
