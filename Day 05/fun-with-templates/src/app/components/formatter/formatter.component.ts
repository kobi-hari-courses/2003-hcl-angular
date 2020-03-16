import { Component, OnInit, TemplateRef, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.css']
})
export class FormatterComponent implements OnInit {
  @ContentChild(TemplateRef)
  template: TemplateRef<any>

  @Input()
  data: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
