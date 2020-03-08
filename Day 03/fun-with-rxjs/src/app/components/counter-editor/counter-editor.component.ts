import { CounterService } from './../../services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-editor',
  templateUrl: './counter-editor.component.html',
  styleUrls: ['./counter-editor.component.css']
})
export class CounterEditorComponent {
  constructor(private counter: CounterService) { }

  async inc(): Promise<void> {
    await this.counter.increment();
  }

  async dec(): Promise<void> {
    await this.counter.decrement();
  }
}
