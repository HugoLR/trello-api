require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000

const api = require('./src/routes/api')

//middleware for POST
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/api/v1', api)

app.get("/", (req, res) => {
  res.send("Hello Team")
});

app.listen(PORT, () => {
  const msg = (`Node Server is running on PORT: ${PORT}`);
  console.log(msg);
});
