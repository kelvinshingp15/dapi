const { Client } = require('pg');
 
const client = new Client({ user: 'user', host: 'localhost', database: 'db', password: 'password', port: '5432', });
 
client.connect() .then(() => { console.log('Connected to PostgreSQL database!'); }) .catch((err) => { console.error('Error connecting to the database:', err); });
