const { Router } = require('express');

const Match = require('../DB/Schemas/Match.js');


const matchsRoutes = Router();


// Routes:

matchsRoutes.post('/new_match', async (req, res) => {
    try {
      const { id, status, countries, date, instance } = req.body;
  
      const newMatch = await Match.create({ id, status, countries, date, instance }, function (err, small) {});
      res.status(201).json(newMatch);
    } catch (error) {
      return res.status(204).send({ Error: error.message });
    }
  });

module.exports = matchsRoutes;