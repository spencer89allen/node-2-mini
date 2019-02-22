const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const planesController = require('./controller');

const app = express();

massive(process.env.DB_CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)

    return app.get('db').new_planes()
})
.then(() => {
   return app.get('db').get_planes()
})
.then((planes) => {
    console.log(planes)
})
.catch(err => {
    console.error(err);
})

app.use( bodyParser.json() );
app.use( cors() );

app.get('/planes', planesController.getPlanes)

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

