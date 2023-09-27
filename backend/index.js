const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./database/database')

const app = express()
app.use(cors())

// for file downloads
app.use('/f', express.static('./uploads'))

const uploadRouter = require('./routes/upload')
const accessRouter = require('./routes/access')

app.use('/upload', uploadRouter)
app.use('/access', accessRouter)

app.listen(1234, () => {
    console.log("[*] Server is up and running ...")
})
