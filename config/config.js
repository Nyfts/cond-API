const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_DES_USERNAME,
    password: process.env.DB_DES_PASSWORD,
    database: process.env.DB_DES_DATABASE,
    host: process.env.DB_DES_HOST,
    dialect: process.env.DB_DES_DIALECT,
  },
  production: {
    username: process.env.DB_PRD_USERNAME,
    password: process.env.DB_PRD_PASSWORD,
    database: process.env.DB_PRD_DATABASE,
    host: process.env.DB_PRD_HOST,
    dialect: process.env.DB_PRD_DIALECT,
  },
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT
};
