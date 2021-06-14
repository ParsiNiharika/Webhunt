import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wq5',
  templateUrl: './wq5.component.html',
  styleUrls: ['./wq5.component.scss']
})
export class Wq5Component implements OnInit {

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
