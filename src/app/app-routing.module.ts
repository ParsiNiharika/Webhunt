import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Question1Component } from './question1/question1.component';
import { Question10Component } from './question10/question10.component';
import { Question2Component } from './question2/question2.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { Question6Component } from './question6/question6.component';
import { Question7Component } from './question7/question7.component';
import { Question8Component } from './question8/question8.component';
import { Question9Component } from './question9/question9.component';
import { RightAnswerComponent } from './right-answer/right-answer.component';
import { Wq1Component } from './wq1/wq1.component';
import { Wq10Component } from './wq10/wq10.component';
import { Wq11Component } from './wq11/wq11.component';
import { Wq12Component } from './wq12/wq12.component';
import { Wq13Component } from './wq13/wq13.component';
import { Wq14Component } from './wq14/wq14.component';
import { Wq15Component } from './wq15/wq15.component';
import { Wq2Component } from './wq2/wq2.component';
import { Wq3Component } from './wq3/wq3.component';
import { Wq4Component } from './wq4/wq4.component';
import { Wq5Component } from './wq5/wq5.component';
import { Wq6Component } from './wq6/wq6.component';
import { Wq7Component } from './wq7/wq7.component';
import { Wq8Component } from './wq8/wq8.component';
import { Wq9Component } from './wq9/wq9.component';
import { WrongAnswerComponent } from './wrong-answer/wrong-answer.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"A",component:Question1Component},
  {path:"x",component:Question2Component},
  {path:"z",component:Question3Component},
  {path:"p",component:Question4Component},
  {path:"v",component:Question5Component},
  {path:"q",component:Question6Component},
  {path:"t",component:Question7Component},
  {path:"n",component:Question8Component},
  {path:"s",component:Question9Component},
  {path:"j",component:Question10Component},
  {path:"dp",component:Wq1Component},
  {path:"dr",component:Wq2Component},
  {path:"dq",component:Wq3Component},
  {path:"dt",component:Wq4Component},
  {path:"dk",component:Wq5Component},
  {path:"dl",component:Wq6Component},
  {path:"da",component:Wq7Component},
  {path:"do",component:Wq8Component},
  {path:"dy",component:Wq9Component},
  {path:"du",component:Wq10Component},
  {path:"dj",component:Wq11Component},
  {path:"dv",component:Wq12Component},
  {path:"di",component:Wq13Component},
  {path:"dx",component:Wq14Component},
  {path:"dg",component:Wq15Component},
  {path:"wrong",component:WrongAnswerComponent},
  {path:"right",component:RightAnswerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
