const express = require('express')

const port = 9000

const app = express

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.listen(() => {
    console.log(`Server started at port ${port}`)
})
