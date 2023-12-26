const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/message', (req, res) => {
  res.send('This is the message from the backend!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
