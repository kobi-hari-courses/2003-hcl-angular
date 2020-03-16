import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { ToggleComponent } from '../components/toggle/toggle.component';

@Directive({
  selector: '[appToggleButton]'
})
export class ToggleButtonDirective {
  @HostListener('click')
  onClick() {
    if (this.toggleComponent) {
      this.toggleComponent.toggle();
    }
  }


  constructor(
    @Optional() private toggleComponent: ToggleComponent
    ) { 
    }

}
