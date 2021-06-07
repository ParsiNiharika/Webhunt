import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss']
})
export class Question1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  navigate(){

    this.router.navigateByUrl("/question2")
  }
  navigateWrong(){
    this.router.navigateByUrl("/wrong")
  }

}
