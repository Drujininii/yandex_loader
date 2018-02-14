'use strict';

const express = require('express'); // Веб-фреймворк

const bodyParser = require('body-parser'); // Парсер для тела запроса

const app = express();

app.use(express.static('./public'));

app.use(bodyParser.json()); // С помощью какой-то древней магии парсит тело запроса,

app.listen(process.env.PORT || 3000, function () {
	console.log('Server run!');
});