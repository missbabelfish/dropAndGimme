//declare variables
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
// const { restart } = require('nodemon')
require('dotenv').config()

//middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))

//mongodb connection - redo with mongoDBclient
MongoClient.connect(process.env.DBSTRING)
    .then(client => {
        console.log('Connected to DB')
        const db = client.db('dropAndGimme')
        const exercises = db.collection('exercises')
        //root GET method
        app.get('/', (req, res) => {
            let warmups = exercises.find({muscleGroup: 'Warmup'}).toArray()
            let key = Math.floor(Math.random()*warmups.length)
            let chosen = warmups[key]
            res.render('index.ejs', chosen)
        })
        //GET method for random exercises
        // app.route('/getWorkout', (req, res) => {
        //     let warmups = exercises.find({muscleGroup: 'Warmup'}).toArray()
        //     let key = Math.floor(Math.random()*warmups.length)
        //     let chosen = warmups[key]
        //     res.render('index.ejs', chosen)
        // })
    })
    .catch(err => conseole.error(error))

app.get('/', async (req, res) => {
    res.render('index.ejs', {})
})

app.get('/viewAll', (req, res) => {
    res.render('viewEdit.ejs', {})
})

app.listen(3000, () => {
    console.log('listening on server 3000')
})



