import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question6',
  templateUrl: './question6.component.html',
  styleUrls: ['./question6.component.scss']
})
export class Question6Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigateByUrl("/t")
  }

  navigateWrong(){
    this.router.navigateByUrl("/wrong")
  }

  navigateA(){
    this.router.navigateByUrl("/dq")
  }

  navigateB(){
    this.router.navigateByUrl("/dy")
  }

  navigateC(){
    this.router.navigateByUrl("/dl")
  }

}
