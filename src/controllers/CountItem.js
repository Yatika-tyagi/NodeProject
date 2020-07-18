exports.countColours = function(req, res) {
  var colorArray=['red','yellow','blue','green','blue'];;
  var MaxRep = 1;
  var m = 0;
  var item;
  var result;
  for (var i=0; i<colorArray.length; i++) {
     for (var j=i; j<colorArray.length; j++)
        {
          if (colorArray[i] == colorArray[j]) {
             m++;
          }
          if (MaxRep<m) {
            MaxRep=m; 
            item = colorArray[i];
          }
        }
        m=0;
  }
   result = item + " " + MaxRep + " times";
  res.send(result);   
};