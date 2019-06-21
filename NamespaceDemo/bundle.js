var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            var fee = daysLate * 0.25;
            return fee;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        if (age < 12) {
            return 3;
        }
        return 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('This is private');
    }
})(Utility || (Utility = {}));
/// <reference path="./utility-functions.ts" />
var util = Utility.Fees;
var lateFee = util.calculateLateFee(10);
console.log("Late Fee - " + lateFee);
