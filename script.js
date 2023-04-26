function threeSum(a) {
var binary = '';
  while (a>0)
   {
binary = (a%2) + binary;
    a = Math.floor(a/2);
     }
	console.log(binary)
return binary;
  
}

module.exports = threeSum;
