import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit, Renderer2 } from '@angular/core';
import { ToggleButtonDirective } from 'src/app/directives/toggle-button.directive';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  isOn: boolean = false;

  constructor(private renderer: Renderer2) { }

  toggle() {
    this.isOn = !this.isOn;
  }

}
