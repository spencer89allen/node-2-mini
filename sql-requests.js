require('dotenv').config({path: __dirname} + '/.env')
const massive = require('massive')

let db

massive(process.env.DB_CONNECTION_STRING).then(dbInstance => {
    db = dbInstance;
    return dbInstance.run(`
    CREATE TABLE airplanes (
        plane_id SERIAL PRIMARY KEY NOT NULL,
        plane_type varchar(40) NOT NULL,
        passenger_count integer NOT NULL
      ) 
    `);
})
.then(() => {
    db;
})
.catch(err => {
    console.error(err);
})