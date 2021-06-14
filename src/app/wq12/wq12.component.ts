import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wq12',
  templateUrl: './wq12.component.html',
  styleUrls: ['./wq12.component.scss']
})
export class Wq12Component implements OnInit {

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
