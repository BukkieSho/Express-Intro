import express from 'express'
import * as studentsDb from './data/students.js'

const app = express()

//check if server works on express
app.listen(3000, function() {
    console.log('listening on port 3000')
})

app.set('view engine', 'ejs')

//mount a route to landing page
app.get('/', function(req, res) {
    res.render('home')
})

app.get('/home', function(req, res) {
    res.render('home')
})
//mount a route to all students
app.get('/students', function(req, res) {
    studentsDb.find({}, function(error, students) {
        res.render('students/index', {
            students: students,
            error: error
        })
    })
})
