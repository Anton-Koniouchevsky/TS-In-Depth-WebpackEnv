/// <reference path="./utility-functions.ts" />
var util = Utility.Fees;
var lateFee = util.calculateLateFee(10);
console.log("Late Fee - " + lateFee);
