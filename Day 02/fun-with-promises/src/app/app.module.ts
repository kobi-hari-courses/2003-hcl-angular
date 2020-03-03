import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerPresenterComponent } from './components/customer-presenter/customer-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerPresenterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
