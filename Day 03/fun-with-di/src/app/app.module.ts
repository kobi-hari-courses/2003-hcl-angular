import { Calc2Component } from './components/calc2/calc2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';

export const BASE_URL = new InjectionToken<string>('base token');

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    Calc2Component,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: BASE_URL, 
    useValue: 'http://hello.world.com'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
