const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.json({
    text: "Super Awesome Text!"
  })
});

module.exports = router;