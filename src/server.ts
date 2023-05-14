const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// database connect
async function main() {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log('database connect done')
  }
catch (err){
    console.log(err)
}
  }
  main()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})