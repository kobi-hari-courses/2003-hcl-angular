import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { NoSpaceDirective } from './directives/no-space.directive';
import { TitleComponent } from './components/title/title.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ToggleButtonDirective } from './directives/toggle-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ReversePipe,
    NoSpaceDirective,
    TitleComponent,
    ToggleComponent,
    ToggleButtonDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
