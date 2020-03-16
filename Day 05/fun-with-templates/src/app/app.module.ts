import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormatterComponent } from './components/formatter/formatter.component';
import { IfDirective } from './directives/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormatterComponent,
    IfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
