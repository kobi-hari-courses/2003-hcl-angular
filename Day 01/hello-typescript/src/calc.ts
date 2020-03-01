export class Calculator {
    constructor(public a: number, public b: number){}

    add(): number {
        return this.a + this.b;
    }
}
