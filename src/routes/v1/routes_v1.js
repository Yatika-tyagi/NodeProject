var express = require('express'); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var countitem = require('../../controllers/CountItem');
var atmdenomination = require('../../controllers/atmDenomination');
// var parseinvoice2 = require('../../controllers/parseinvoice2');
/*
Wrapper APIs Start
*/
router.route('/atm-amount')
  .post(atmdenomination.dispenseCase)

router.route('/count-colours')
  .get(countitem.countColours)  
/*
Wrapper APIs Ends
*/

module.exports = router; // Exporting router
