import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss']
})
export class Question2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateWrong(){
    this.router.navigateByUrl("/wrong")
  }

  navigate(){
    this.router.navigateByUrl("/z")
  }

  navigateA(){
    this.router.navigateByUrl("/dr")
  }

  navigateB(){
    this.router.navigateByUrl("/dt")
  }

  navigateC(){
    this.router.navigateByUrl("/dy")
  }

  navigateBack(){
    // this.router.navigate("")
  }

}
