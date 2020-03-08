import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { AdderService } from './adder.abstact';

@Injectable({
    providedIn: 'root'
})
export class CorrectAdderService extends AdderService {
    id: number;

    constructor(private logger: LoggerService) {
        super();
        this.id = Math.ceil(Math.random()*1000000);
        console.log('Correct Adder Service constructed with id:' + this.id);
    }

    add(o1: number, o2: number): number {
        this.logger.log(`AdderService.add ${o1}, ${o2}`);
        return o1 + o2;
    }
}