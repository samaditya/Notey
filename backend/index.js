const connect2Mongo = require('./db');
const express = require('express')
var cors = require('cors')

connect2Mongo();
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

// Available Routes
app.use('/api/createuser', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})