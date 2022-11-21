require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(cors());

// To test this route go to http://localhost:8080/api/example
const apiRoutes = require('./routes/api/example');

app.use('/api/example', apiRoutes);

app.get('/', (req, res) => {
  res.send("Hey! How are you?");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});