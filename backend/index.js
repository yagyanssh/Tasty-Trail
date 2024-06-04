require('dotenv').config()

const express = require('express')
const app = express();
const port = 4000

app.get('/api/fridge', (req, res) => {
    const items = [
        {
            id: 1,
            title: 'Milk',
            Quatity: '2 bottles'
        },
        {
            id: 2,
            title: 'Vine',
            Quatity: '1 bottles'
        },
        {
            id: 3,
            title: 'Bread',
            Quatity: '2 Packets'
        },
        {
            id: 4,
            title: 'butter',
            Quatity: '1 bar'
        },
        {
            id: 5,
            title: 'Vegitales',
            Quatity: '2 packs'
        },
    ]; 
    res.send(items)
})


// app.get('/api', (req, res) => {
//     res.send("<h1>Hello  welcome to tasty trail</h1>")
// })

// app.get('/api/login', (req, res) => {
//     res.send('<h1>wlecom to the Login page of Cook it up</h1>')
// })



app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })
  