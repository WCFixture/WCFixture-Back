const { Router } = require('express');

const User = require('../DB/Schemas/User.js');


const userRoutes = Router();


// Routes:


userRoutes.get('/chequear_user/:email', async (req, res) => {
    try {
        const { email } = req.params;
        let json = await User.findOne({email:email})
        if(!json){
            let nuevo = User.create({email, prodeComplete: false})
        }
        res.status(201).json(nuevo);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});

module.exports = userRoutes;