const express = require('express');
const app = express();

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.json({ text: 'Hello, world!' });
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
