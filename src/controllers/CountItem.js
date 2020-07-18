exports.countColours = function(req, res) {
  var colorArray=['red','yellow','blue','green','blue'];
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

// var greet = () => {
//   var colorArray=['red','red','blue','green','red','yellow','blue','red','green'];
//   var MaxRep = 1;
//   var m = 0;
//   var item;
//   for (var i=0; i<colorArray.length; i++) {
//      for (var j=i; j<colorArray.length; j++)
//         {
//           if (colorArray[i] == colorArray[j]) {
//              m++;
//           }
//           if (MaxRep<m) {
//             MaxRep=m; 
//             item = colorArray[i];
//           }
//         }
//         m=0;
//   }
//   console.log(item+" ( " +MaxRep +" times ) ") ;
//  }
//  greet()













// const getMarcoPolo = (number) => {
//   if ((number % 4) == 0 && (number % 7) == 0 ) {
//      return 'marcoPolo';
//    }  
//    else if (number % 4 == 0) {
//      return 'marco'; 
//    } else if (number % 7 == 0) { 
//      return 'polo'; 
//    } else {
//        return number;
//    }
// }