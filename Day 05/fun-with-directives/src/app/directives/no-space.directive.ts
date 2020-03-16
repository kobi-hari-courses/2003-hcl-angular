import { Directive, HostListener, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'input[appNoSpace][type="text"]'
})
export class NoSpaceDirective implements OnInit {
  private lastValidValue: string;

  isValid(value: string): boolean {
    return !value.includes(' ');
  }

  @HostListener('input', ['$event'])
  onInput(data: InputEvent) {
    let elem = <any>data.srcElement;
    this.enforceValidation(elem);
  }

  enforceValidation(elem: any) {
    let val = elem.value;
    if (this.isValid(val)) {
      this.lastValidValue = val;
    } else {
      elem.value = this.lastValidValue;
    }
  }


  constructor(private elem: ElementRef) { 
    console.log('No Space Directive created');

  }

  ngOnInit(): void {
    this.lastValidValue = '';
    this.enforceValidation(this.elem.nativeElement);
  }

}
