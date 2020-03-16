import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myFavoriteColor = 'magenta';
  myHatedColor = 'salmon';

  whenDirectiveIsOn() {
    console.log('directive is on');
  }
}
