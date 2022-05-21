require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4309;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const startApp = async () => {
  
  try {
    await mongoose.connect(MONGO_URI);
    app.listen(PORT, () => console.log(`App started on PORT: ${PORT}.`));
  } catch (e) {
    console.log(e.message);
  }
  
};

startApp().then(() => {
  console.log('☕ ☕ ☕');
});
