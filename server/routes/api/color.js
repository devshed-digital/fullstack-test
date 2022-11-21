const express = require('express');
const router  = express.Router();

let colors = []

router.post('/', (req, res) => {
  console.log(req.body.inputVal)
  const colorVal = req.body.inputVal
  colors.push(colorVal);
  res.send(colors)

});

module.exports = router;