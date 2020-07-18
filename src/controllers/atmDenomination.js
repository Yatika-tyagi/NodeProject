
exports.dispenseCase = function(req, res) {
  const inputAmount = req.query.inputAmount;
  const accountBalance = req.query.accountBalance;
  var outputArray = [];
 
  if(inputAmount !== 0 && inputAmount % 100 == 0 && inputAmount <= accountBalance) {
    var noteOf2000 = Math.round(inputAmount / 2000);
    var noteOf500 = Math.round((inputAmount - (noteOf2000 * 2000)) / 500 );
    // var noteOf200 = Math.round((inputAmount - ((noteOf2000 * 2000) + (noteOf500 * 500))) / 200)
    var noteOf100 = Math.round((inputAmount - ((noteOf2000 * 2000) + (noteOf500 * 500))) / 100);

    outputArray.push(noteOf2000);
    outputArray.push(noteOf500);
    // outputArray.push(noteOf200);
    outputArray.push(noteOf100);

   console.log("Balance in your account left = ", accountBalance - inputAmount);
   console.log(outputArray);
   }
   else if (inputAmount > accountBalance) {
   
   console.log("Insufficient amount in your account");
   }
   else if ( inputAmount % 100 != 0 || inputAmount < 100 ) {
   console.log( "Invalid Input, Amount should be multiples of 100");
 }
  res.send(outputArray);   
  
};