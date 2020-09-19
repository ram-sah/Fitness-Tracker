const express = require('express')
const router = express.Router() 
const path = require("path");
// router.get("/index", (req, res) => {
//   res.sendFile(path.join(__dirname, "..public/index.html"));
// });
// Gets exercise html page 
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
// Gets stats html page 
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;