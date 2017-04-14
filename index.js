const app = require('express')();

app.get('/health', (req, res) => {
	res.send('Success!');
});

app.get('/', (req, res) => {
	res.send('Hello ECS!!');
});

app.listen(8000, () => console.log('The server is running...'));