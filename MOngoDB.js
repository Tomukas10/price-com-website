const express = require('express')
const mongoose = require('mongoose') 
const app = express()
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://tomaspavan150:pewdiepie@maindb.rtvva.mongodb.net/sample_mflix", { useNewUrlParser: true}, { useUnifiedTopology: true})

const NoteSchema = new mongoose.Schema({
    email: String
})

const Note = mongoose.model("Emails", NoteSchema);

app.get("/", function(req, res){
    
    res.sendFile(__dirname + "/public/main.html")
})

app.post("/", function(req, res){
    let newNote = new Note({
        email: req.body.email
        
    })
    newNote.save();
    res.redirect("/")
})
    
app.listen(3000)

app.use(express.static('public'))

