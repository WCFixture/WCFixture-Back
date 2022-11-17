const { Router } = require('express');
const router = Router();



const Country = require('../DB/Schemas/Country.js');
const Match = require('../DB/Schemas/Match.js');



const matchsRoutes = require('./matchsRoutes');
const countriesRoutes = require('./countriesRoutes');
const userRoutes = require('./userRoutes');






// ROUTES:

router.use('/match', matchsRoutes)
router.use('/country', countriesRoutes)
router.use('/user', userRoutes)




module.exports = router;
