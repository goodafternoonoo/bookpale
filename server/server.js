const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello')
})

app.listen(8080, function () {
  console.log('listening on 8080')
});