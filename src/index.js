const express = require('express')
const app = express()

app.use(express.json())

const UserController = require("./Controllers/UserController");
const CarController = require("./Controllers/CarController");

app.get('/users', UserController.index)
app.get('/users/:id', UserController.show)
app.post('/users', UserController.store)

app.get('/cars', CarController.index)
app.post('/cars', CarController.store)

app.listen(3333)
