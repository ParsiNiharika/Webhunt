import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wq3',
  templateUrl: './wq3.component.html',
  styleUrls: ['./wq3.component.scss']
})
export class Wq3Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateWrong(){
    this.router.navigateByUrl("/wrong")
  }

  navigateRight(){
    this.router.navigateByUrl("/right")
  }


}
