// import { Calculator } from "./calc";

// let c1 = new Calculator(1, 2);
// console.log(c1.add());

class Calc {
    run() {
        let i = 10;
        let j = 20;
        let z = i * j;
        
        console.log(`${i} * ${j} = ${z}`);
    }
}

let c = new Calc();
c.run();

