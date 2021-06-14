import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.scss']
})
export class Question4Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigateByUrl("/v")
  }

  navigateWrong(){
    this.router.navigateByUrl("/wrong")
  }

  navigateA(){
    this.router.navigateByUrl("/dk")
  }

  navigateB(){
    this.router.navigateByUrl("/dj")
  }

  navigateC(){
    this.router.navigateByUrl("/dg")
  }

}
