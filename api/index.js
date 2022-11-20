const server = require('./src/App.js');
require('dotenv').config();
const database = require('./src/DB/DB.js');
const PORT = process.env.PORT;

database.on('error', (error) => {
  console.log(error);
});
database.once('connected', () => {
  console.log('Database connected!');
});

server.listen(PORT, () => {
  console.log(`Server connected on port: ${PORT}`);
});
