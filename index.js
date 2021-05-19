const express = require('express')
const app = express()
const PORT = process.env.PORT || 7070
const dog = require('./cachorros')
const busca = require('./consulta')


app.use(dog)

app.use(busca)


app.listen(PORT, function () {

    console.log("servidor iniciado")
})