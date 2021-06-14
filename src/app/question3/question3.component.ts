import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.scss']
})
export class Question3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateWrong(){
    this.router.navigateByUrl("/wrong")
  }

  navigate(){
    this.router.navigateByUrl("/p")
  }

  navigateA(){
    this.router.navigateByUrl("/du")
  }

  navigateB(){
    this.router.navigateByUrl("/di")
  }

  navigateC(){
    this.router.navigateByUrl("/dl")
  }

}
