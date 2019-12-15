const express = require('express')
const app = express()
const port = process.env.PORT || 3000



app.listen(port, () => console.log(`Server listening on ${port}`))


const accountRouter = require('./api/accounts')
app.use('/api/accounts', accountRouter)