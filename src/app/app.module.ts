import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question2Component } from './question2/question2.component';
import { WrongAnswerComponent } from './wrong-answer/wrong-answer.component';
import { Question1Component } from './question1/question1.component';

@NgModule({
  declarations: [
    AppComponent,
    Question2Component,
    WrongAnswerComponent,
    Question1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
