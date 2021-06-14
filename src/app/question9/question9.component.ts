import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question9',
  templateUrl: './question9.component.html',
  styleUrls: ['./question9.component.scss']
})
export class Question9Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigateByUrl("/j")
  }

  navigateWrong(){
    this.router.navigateByUrl("/wrong")
  }

  navigateA(){
    this.router.navigateByUrl("/dk")
  }

  navigateB(){
    this.router.navigateByUrl("/dp")
  }

  navigateC(){
    this.router.navigateByUrl("/dv")
  }

}
