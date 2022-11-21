require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const apiRoutes2 = require('./routes/api/color');

app.use('/api/color', apiRoutes2);

app.get('/', (req, res) => {
  res.send("Hey! How are you?");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});