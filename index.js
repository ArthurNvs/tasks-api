const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

// gerencia os módulos
consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

// acesso ao knex
app.db = db

app.listen(3000, () => {
    console.log('tasks-backend is loaded and running...')
})