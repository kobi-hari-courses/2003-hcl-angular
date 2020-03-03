import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { SummaryPresenterComponent } from './components/summary-presenter/summary-presenter.component';
import { IsDoneComponent } from './components/is-done/is-done.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionPresenterComponent,
    SummaryPresenterComponent,
    IsDoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
