import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appSelectorTemplate]'
})
export class SelectorTemplateDirective {
    constructor(public template: TemplateRef<any>){}

}