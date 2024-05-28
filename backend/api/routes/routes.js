const express = require('express')
const router = express.Router()

//register account
router.post('/registeruser',(req,res) => {
    res.json(req.body)
})


router.get('/test',(req,res) => {
    res.send('funcionando!')
} )


module.exports=router