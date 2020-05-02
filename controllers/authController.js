/** External Modules **/
var express = require("express");

/** Internal Modules **/

var router = express.Router();


router.get("/register", async (req, res) => {
  throw new Error("Fatal error");
  
  console.log(x);
  res.send();
});

module.exports = router;