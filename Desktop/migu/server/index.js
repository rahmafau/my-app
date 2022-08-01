const express = require ('express')
const PORT = 3001
const app = express()
const cors = require('cors')
const bearerToken = require('express-bearer-token')
const crypto = require('crypto')

app.use(cors())
app.use(express.json())
app.use(bearerToken())

const mysql = require('mysql2')


const userRoutes = require("./routes/user");
app.use("/user", userRoutes)

const uploadRoute = require("./routes/upload");
app.use("/upload", uploadRoute)
  

app.listen(PORT, () => console.log(`Api Running: ${PORT}`));