import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-title-presenter', 
    templateUrl: './title-presenter.component.html', 
    styleUrls: ['./title-presenter.component.css']    
})
export class TitlePresenterComponent implements OnInit {
    @Input()
    title: string = 'My Title';

    private _backgroundColor: string = 'darkseagreen';

    @Input('bg')    
    get backgroundColor(): string {return this._backgroundColor;}
    set backgroundColor(value: string) {
        this._backgroundColor = value;
        if (this.backgroundColor.includes('light')) {
            this.textColor = 'black';
        } else {
            this.textColor = 'white';
        }
    }


    textColor: string = 'white';

    constructor() {
    }

    ngOnInit(): void {
    }

}