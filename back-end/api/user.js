const express = require('express')
const getUserById = require('../db');
const router = express.Router()


router.get('/',(req, res, next)=>{
    res.status(200).json({
        message:'Handling GET method to /user'
    })
})


router.post('/',(req, res, next)=>{
    res.status(200).json({
        message:'Handling POST method  to /user'
    })
})

router.get('/:userId', async (req, res, next)=>{
    const id = req.params.userId
    const user = await getUserById(id);
    if(!user){
        return res.status(404).send('User not found!')
    }
    res.status(200).json({
        user
    })
})


module.exports = router;