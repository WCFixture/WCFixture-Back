const { Router } = require('express');

const Match = require('../DB/Schemas/Match.js');


const matchsRoutes = Router();


// Routes:


matchsRoutes.post('/new_match', async (req, res) => {
    try {
        const { id, status, countries, date, instance } = req.body;
        let json = await Match.create({ id, status, countries, date, instance });
        res.status(201).json(json);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});

module.exports = matchsRoutes;