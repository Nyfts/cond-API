/** External Modules **/
const express = require("express");
const cors = require('cors');


/** Internal modules **/


/** Express setup **/
const app = express();
app.use(cors());
app.use(express.json());

/** Enviroment variables */
const { NODE_ENV, PORT } = require('./config/config');

/** Express routing **/

app.listen(PORT || 5000, () => console.log(`Server is running in ${NODE_ENV} environment, on PORT ${PORT || 5000}`));
