import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Chart} from 'node_modules/chart.js';

@Component({
  selector: 'app-grafico-ondas',
  templateUrl: './grafico-ondas.component.html',
  styleUrls: ['./grafico-ondas.component.less']
})
export class GraficoOndasComponent implements OnInit {

  @ViewChild('myChart')
  myCanvas: ElementRef<HTMLCanvasElement>;

  public ctx: CanvasRenderingContext2D;

  constructor() { }


   loadCity(local){

    document.getElementById("cidade").innerHTML = "Previsão Surf " + local;
    console.log(local);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
    //    cidade(this);
      }
     
    }; 
    //http://servicos.cptec.inpe.br/XML/cidade/851/todos/tempos/ondas.xml   
   //pega o codigo da cidade escolhida
    xhttp.open("GET", "http://servicos.cptec.inpe.br/XML/listaCidades?city="+local, true);
    xhttp.send();
  }


 
  ngOnInit() {

   
   
    
  
  }

}
