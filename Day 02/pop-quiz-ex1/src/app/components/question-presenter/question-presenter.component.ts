import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent {
  @Input()
  caption: string = '';

  @Input()
  options: string[] = [];

  @Output()
  selected = new EventEmitter<number>();

  onSelect(value: number) {
    this.selected.emit(value);
  }

}
