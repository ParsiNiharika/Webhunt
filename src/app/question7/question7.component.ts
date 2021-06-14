import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.component.html',
  styleUrls: ['./question7.component.scss']
})
export class Question7Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigateByUrl("/n")
  }

  navigateWrong(){
    this.router.navigateByUrl("/wrong")
  }

  navigateA(){
    this.router.navigateByUrl("/dt")
  }

  navigateB(){
    this.router.navigateByUrl("/di")
  }

  navigateC(){
    this.router.navigateByUrl("/dj")
  }

}
