const { Router } = require('express');

const Country = require('../DB/Schemas/Country.js');


const countriesRoutes = Router();


// Routes:

countriesRoutes.post('/new_country', async (req, res) => {
    try {
        const { id, status, name, group } = req.body;
        let json = await Country.create({ id, status, name, group });
        res.status(201).json(json);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});

module.exports = countriesRoutes;