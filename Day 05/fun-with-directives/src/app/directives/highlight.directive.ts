import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHighlight]', 
  exportAs: 'highlight'
})
export class HighlightDirective implements OnInit {
  isOn: boolean = true;

  @Input('appHighlight')
  color: string = 'lime';

  @Output()
  triggered = new EventEmitter<void>();

  @HostBinding('style.background-color')
  get bgColor(): string { return this.isOn ? this.color : ''};

  @HostListener('click')
  whenIAmClicked() {
    this.isOn = !this.isOn;
    if (this.isOn) {
      this.triggered.emit();
    }
  }


  constructor(
    private elem: ElementRef, 
    private renderer: Renderer2
  ) {
   }

  ngOnInit(): void {
    // this.elem.nativeElement.style.backgroundColor = 'yellow';
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'pink');
  }
}
