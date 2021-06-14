import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wq8',
  templateUrl: './wq8.component.html',
  styleUrls: ['./wq8.component.scss']
})
export class Wq8Component implements OnInit {

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
