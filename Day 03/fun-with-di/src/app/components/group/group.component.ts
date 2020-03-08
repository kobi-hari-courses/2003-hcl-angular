import { environment } from './../../../environments/environment.prod';
import { CorrectAdderService } from './../../services/correct-adder.service';
import { Component, OnInit } from '@angular/core';
import { AdderService } from 'src/app/services/adder.abstact';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [
    {
      provide: CorrectAdderService, 
      useClass: CorrectAdderService
    },
    {
      provide: AdderService,
      useExisting: CorrectAdderService
    }
]

})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
