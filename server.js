const http = require('http');
const app = require('./app.js');
const dotenv = require('dotenv');
const sequelize = require('./config/database');


dotenv.config();

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

server.listen(PORT, () => {
	sequelize.sync().then(() => console.log('Successfully connected to DB')).catch(e => console.log(e));

	console.log(`server started on the port ${PORT}`);
});


