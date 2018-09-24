const express = require('express');
const app = express();
const PORT = 4444;

// mongoose 
const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env'});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true})
		.then(() => console.log('db connected'))
		.catch(err => console.error(err));

app.listen(PORT, () => {
	console.log('I am listening');
});

app.get('/', function(req, res) {
	res.send('Hello World');
});