import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { ToggleButtonDirective } from 'src/app/directives/toggle-button.directive';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements AfterViewInit  {
  @ViewChild('koteret')
  h: ElementRef;

  isOn: boolean = false;

  constructor(private renderer: Renderer2) { }
  
  ngAfterViewInit(): void {
    console.log(this.h);
  }

  toggle() {
    this.isOn = !this.isOn;
  }




}
