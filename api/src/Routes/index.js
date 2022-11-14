const { Router } = require('express');
const router = Router();



const Country = require('../DB/Schemas/Country.js');
const Match = require('../DB/Schemas/Match.js');



const matchsRoutes = require('./matchsRoutes');






// ROUTES:

router.post('/match', async (req, res) => {
    try {
        const { id, status, countries, date, instance } = req.body;
        let json = await Match.create({ id, status, countries, date, instance });
        res.status(201).json(json);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});


module.exports = router;
