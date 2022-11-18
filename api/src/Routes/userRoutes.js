const { Router } = require('express');

const User = require('../DB/Schemas/User.js');


const userRoutes = Router();


// Routes:

userRoutes.get('/get_prode/:email', async (req, res) => {
    try {
        const { email } = req.params;
        let json = await User.findOne({ email: email })
        res.status(200).json(json.prode);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});

userRoutes.post('/update_prode/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const { matchId, result } = req.body;
        let json = await User.findOne({ email: email })
        json.prode[matchId] = result
        json.markModified('prode')
        await json.save()
        res.status(200).json(json.prode);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});


userRoutes.get('/chequear_user/:email', async (req, res) => {
    try {
        const { email } = req.params;
        let json = await User.findOne({ email: email })
        if (!json) {
            await User.create({ email, prodeComplete: false, prode: {points: 0} })
        }
        res.status(200).json(json);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});

module.exports = userRoutes;