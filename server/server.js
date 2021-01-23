require('./config/config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario/:id', (req, res) => {
    let id = req.params.id
    res.json(id)
    res.end()
})

app.post('/usuario', (req, res) => {
    let usuario = req.body
    if (usuario.nombre === undefined) {
        res.status(400, json({
            ok: false,
            mensaje: "nombre no existe"
        }))
    }
    res.json(usuario)
    res.end()
})

app.put('/usuario', (req, res) => {
    res.json("put usuarios")
})

app.delete('/usuario', (req, res) => {
    res.json("delete usuarios")
})





app.listen(process.env.PORT, () => {
    console.log("corriendo por el puerto 3000")
})