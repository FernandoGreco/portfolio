import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout2',
  templateUrl: './layout2.component.html',
  styleUrls: ['./layout2.component.less']
})
export class Layout2Component implements OnInit {

  constructor() { }
  
  today: number = Date.now();


  ngOnInit() {    
  }

}
