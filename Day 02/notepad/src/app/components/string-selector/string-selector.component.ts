import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  templateUrl: './string-selector.component.html',
  styleUrls: ['./string-selector.component.css']
})
export class StringSelectorComponent implements OnInit {
  @Input()
  options: string[] = [];

  @Input()
  selectedOption: string = '';

  @Output()
  selection = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(value: string) {
    this.selection.emit(value);
  }

}
