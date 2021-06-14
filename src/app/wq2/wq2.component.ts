import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wq2',
  templateUrl: './wq2.component.html',
  styleUrls: ['./wq2.component.scss']
})
export class Wq2Component implements OnInit {

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
