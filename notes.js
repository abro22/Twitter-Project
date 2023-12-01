const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))



const students = [

    {
        name: "David",
        email: "david@icloud.com",
        id: "1"

    },

    {
        name: "Terrel",
        email: "trell@icloud.com",
        id: "2"
    },

    {
        name: "Autumn",
        email: "a@icloud.com",
        id: "3"

    }
]


// route
// app.get("/", (req, res) => {
//     res.send("Hello!")
// })

//-----

app.get("/students", (req, res) => {
    res.send(students)
})

//route that takes in user ID and sends back data for the given id 
//: tells what wtill be a parameter in the url bar

// app.get("/students/:id", (req, res) => {
//     const userID = req.params.id
//     // const name = req.params.name
//     res.send(`You asked for the student with ID number ${userID}`)
// })

// app.get("/students/:id", (req, res) => {
//     const userID = req.params.id

//     for (let i = 0; i < students.length; i++) {
//         if (students[i].id === userID) {
//             res.send(students[i])

//         }
//     }
// })


////ACTIVITY

// app.get("/students/:name", (req, res) => {
//     const userName = req.params.name

//     for (let i = 0; i < students.length; i++) {
//         if (students[i].name === userName) {
//             res.send(students[i])
//         }
//     }
// })

///MIDDLEWARE- code that runs before routing code 
//code that logs every time someone visits webpage
app.use("*", (res, res, next) => {
    console.log(`Someone visited our website at ${Date.now()}`)
    next()
})


app.get("/", (req, res) => {
    res.send("Hello!")
})




app.listen(3000)
console.log("express is running on localhost:3000")