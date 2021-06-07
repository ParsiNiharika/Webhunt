import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { WrongAnswerComponent } from './wrong-answer/wrong-answer.component';


const routes: Routes = [
  {path:"",redirectTo:"question1",pathMatch:"full"},
  {path:"question1",component:Question1Component},
  {path:"question2",component:Question2Component},
  {path:"wrong",component:WrongAnswerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
