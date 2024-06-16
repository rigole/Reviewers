const express = require("express")
const db = require('./db')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});