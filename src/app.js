import express from 'express';

const port = 3000;
const app = express();

app.get('', (req, res) => {
	res.send('main page');
});

app.get('/*', (req, res) => {
	res.send('404');
});

app.listen(port, () => {
	console.log(`server started at port ${port}`);
});
