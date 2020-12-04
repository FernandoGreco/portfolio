import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.less']
})
export class SobreComponent implements OnInit {

  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;


  constructor() { }

  ngOnInit() {

  }

}
