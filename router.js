const express = require('express');
const router = express.Router();

const { 
  ownBeer,
  ownRating,
  beerRating,
  rankingBeer,
 } =require('./src/Middelware/game')

router.route('/createbeer')
  .post(ownBeer);

router.route('/beerrating/:id')
  .post(ownRating) 
  .get(beerRating) 

router.route('/ranking')
  .get(rankingBeer) 


module.exports = router;