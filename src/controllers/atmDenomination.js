exports.dispenseCase = function(req, res) {
  const withdrawAmount = req.query.withdrawAmount;
   if(withdrawAmount <= 0 || withdrawAmount%100 !== 0){
      res.send(' please enter correct amount ');
    } else {
        res.send(minNumberOfNote(withdrawAmount))
  } 
  };

var minNumberOfNote = function(withdrawAmount){
  var totalNotesCount = {}
  let ATMAmountTypes = [2000,500,200,100];
  for(let amountType of ATMAmountTypes) {
      noteCount = Math.floor(withdrawAmount/amountType);
      if(noteCount > 0) {
          totalNotesCount[amountType] = noteCount || 1;
          withdrawAmount = withdrawAmount% amountType;

      }
  }
   return totalNotesCount;
}