// const fs = require('fs')
// const http = require('http')

// require('')

const express = require('express')

const app = express()

app.get("/HELLO", (req, res, next) => {
    return res.status(200).send({
        message: "hello world , Tamir"
    })
})
app.listen(8000, () => {
    console.log("server berhasil di port 8000")
})