import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ibovespa',
  templateUrl: './ibovespa.component.html',
  styleUrls: ['./ibovespa.component.less']
})
export class IbovespaComponent implements OnInit {

  @ViewChild('dogs') myDiv: ElementRef;
  @ViewChild('btnVeja') botao: ElementRef;
  fOurT = false;

  constructor() { }

  ngOnInit() {
    
  }
  
  showDogs(){
    let div = this.myDiv.nativeElement;
    let btn = this.botao.nativeElement;
    if( this.fOurT === false){      
      div.style.display = 'inherit';
      btn.innerHTML = 'Esconde (hide)';
      this.fOurT = true;
    }

    else{
      div.style.display = 'none';
      this.fOurT = false;
      btn.innerHTML = 'Mostra (show)';
    }
      }


}
