import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question8',
  templateUrl: './question8.component.html',
  styleUrls: ['./question8.component.scss']
})
export class Question8Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigateByUrl("/s")
  }

  navigateWrong(){
    this.router.navigateByUrl("/wrong")
  }

  navigateA(){
    this.router.navigateByUrl("/dr")
  }

  navigateB(){
    this.router.navigateByUrl("/dg")
  }

  navigateC(){
    this.router.navigateByUrl("/do")
  }

}
