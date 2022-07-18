const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

app.set('view engine', 'ejs')

MongoClient.connect(process.env.DBSTRING, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('dropAndGimme')
    })
    .catch(console.error)



app.listen(3000, function() {
    console.log('listening on server 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

