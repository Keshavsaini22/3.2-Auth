const express = require('express')
const app = express()
const port = 8000
const auth=require("./routes/auth")
const post=require("./routes/post")

app.use(express.json())


app.use("/auth",auth)

app.use("/posts",post)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} !`)
})