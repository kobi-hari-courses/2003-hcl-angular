import { Question } from './../../models/question.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-presenter',
  templateUrl: './summary-presenter.component.html',
  styleUrls: ['./summary-presenter.component.css']
})
export class SummaryPresenterComponent implements OnInit {
  @Input()
  questions: Question[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
