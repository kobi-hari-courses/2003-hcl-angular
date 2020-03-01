import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['Red', 'Blue', 'Green', 'Brown', 'Cyan', 'Black'];
  sizes = ['12px', '18px', '27px', '40px', '72px'];
  fonts = ['Tahoma', 'Segoe UI', 'David', 'Arial', 'Consolas'];

  selectedColor = this.colors[0];
  selectedSize = this.sizes[0];
  selectedFont = this.fonts[0];

  selectColor(value: string) {
    this.selectedColor = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }

}
