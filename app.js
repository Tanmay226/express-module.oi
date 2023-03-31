const express = require('express')
const path = require('path')

const app = express()
const port = 3000

// this code use for link public folder
app.use(express.static(path.join(__dirname,"public")))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send('this is contact !')
  })

  app.get('/about', (req, res) => {
    
    // res.send('this is about !')


    // how to send html file
    // res.sendFile(path.join(__dirname,'index.html'))

    // how to send json code?
    res.json({"harry":25})
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
