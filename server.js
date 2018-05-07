const express = require('express');
const app = express();
const path = require('path');
var multer = require('multer');

// app.use(express.static(__dirname) + '/dist');

app.use(multer({
  dest: path.join(__dirname, '/dist')
}).any());

app.listen(process.env.PORT || 8080);


app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname+'/dist/index.html'));
});

console.log('Server is listening!!!');