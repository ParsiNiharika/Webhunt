import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.component.html',
  styleUrls: ['./question10.component.scss']
})
export class Question10Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigateByUrl("/question2")
  }

  navigateWrong(){
    this.router.navigateByUrl("/wrong")
  }

  navigateA(){
    this.router.navigateByUrl("/dp")
  }

  navigateB(){
    this.router.navigateByUrl("/do")
  }

  navigateC(){
    this.router.navigateByUrl("dq")
  }

}
