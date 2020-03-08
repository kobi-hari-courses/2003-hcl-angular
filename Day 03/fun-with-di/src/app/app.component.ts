import { WrongAdderService } from './services/wrong-adder.service';
import { AdderService } from 'src/app/services/adder.abstact';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [{
    provide: AdderService, 
    useClass: WrongAdderService
  }]
})
export class AppComponent {
  title = 'fun-with-di';
}
