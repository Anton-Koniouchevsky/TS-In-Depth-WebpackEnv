/// <reference path="./utility-functions.ts" />

import util = Utility.Fees;

const lateFee = util.calculateLateFee(10);
console.log(`Late Fee - ${lateFee}`);

