"use strict";
// import { Calculator } from "./calc";
// let c1 = new Calculator(1, 2);
// console.log(c1.add());
var Calc = /** @class */ (function () {
    function Calc() {
    }
    Calc.prototype.run = function () {
        var i = 10;
        var j = 20;
        var z = i * j;
        console.log(i + " * " + j + " = " + z);
    };
    return Calc;
}());
var c = new Calc();
c.run();
//# sourceMappingURL=main.js.map