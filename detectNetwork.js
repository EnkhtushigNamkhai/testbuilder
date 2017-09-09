// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  /*
    The Diner's Club network always starts with a 38 or 39 and is 14 digits long
    The American Express network always starts with a 34 or 37 and is 15 digits long

    Visa always has a prefix of 4 and a length of 13, 16, or 19.
    MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

    Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
    Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

    China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
    Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19. 
  */

  var num = parseInt(cardNumber).toString();
  var length = num.length;

  var prefix = num.slice(0,2);
  var prefixThree = num.slice(0,3);
  var prefixFour = num.slice(0,4);
  var prefixSix = num.slice(0,6);
  
  var isDinner = (length === 14) && (prefix === "38" || prefix === "39");
  if (isDinner) {
  	return "Diner's Club";
  }

  var isAmericanExpress = (length === 15) && (prefix === "34" || prefix === "37");
  if (isAmericanExpress) {
  	return "American Express";
  } 

  var isSwitch = (prefixFour === '4903' || prefixFour === '4905' || prefixFour === '4911' || prefixFour === '4936' || prefixFour === '6333' || prefixFour === '6759' ||
  prefixSix === '564182' || prefixSix === '633110') && (length === 16 || length === 18 || length === 19);
  if (isSwitch) {
    return "Switch";
  }

  var isVisa = (prefix.charAt(0) === '4') && (length === 13 || length === 16 || length == 19);
  if (isVisa) {
    return "Visa";
  } 

  var isMasterCard = (length === 16) && (50 < parseInt(prefix) && parseInt(prefix) < 56);
  if (isMasterCard) {
    return "MasterCard";
  }

  var isDiscover = (prefixFour === '6011' || (643 < parseInt(prefixThree) &&  parseInt(prefixThree) < 650) || prefix === '65') && (length === 16 || length === 19);
  if (isDiscover) {
    return "Discover";
  }

  var isMaestro = (prefixFour === '5018' || prefixFour === '5020' || prefixFour === '5038' || prefixFour === '6304') && (11 < length && length < 20);
  if (isMaestro) {
    return "Maestro";
  }

  var isChinaUnion = ((622126 <= parseInt(prefixSix) && parseInt(prefixSix) <= 622925) || (624 <= parseInt(prefixThree) && parseInt(prefixThree) <= 626) 
    || (6282 <= parseInt(prefixFour) && parseInt(prefixFour) <= 6288)) && (16 <= length && length <= 19);
  if (isChinaUnion) {
    return "China UnionPay";
  }
};
