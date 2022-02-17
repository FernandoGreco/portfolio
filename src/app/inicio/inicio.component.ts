import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.less']
})

export class InicioComponent implements OnInit {
 
   @ViewChild('log') myDiv: ElementRef;


  constructor() { 
      }

  ngOnInit() {

   // this.myDiv.nativeElement.innerHTML = "teste";
    
   let div = this.myDiv.nativeElement;

  let textos = ['Desenvolvedor Front-End', 'Plataformas E-commerce: JET, Nuvemshop, Loja Integrada, Tray',  'Type Script, PHP, Mysql, JavaScript e CSS'];
 
  rodape(textos,div);

  function rodape(conteudos,div){
    var atual = -1;
    var cont = 0;
  function prox(cb){
    cont++;
    if (atual < conteudos.length - 1) atual++;
    else atual = 0;
    var str = conteudos[atual];
   
    escrever(str,div, function(){
      limpar(prox,div);
    });
  }
  prox(prox);
  }

  function escrever(str, div, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 2000); // só para esperar um bocadinho
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 80);
}

function limpar(done,div) {
  var char = div.innerHTML;
  var nr = char.length;
  var typer = setInterval(function() {
      if (nr-- == 0) {
          clearInterval(typer);
          return done();
      }
      div.innerHTML = char.slice(0, nr)
  }, 25);
}

 
  /*


  rodape(conteudos) {
    var atual = -1;
    var cont = 0;
    function prox(cb){
    cont++;
    if (atual < conteudos.length - 1) atual++;
    else atual = 0;
    var str = conteudos[atual];
   
     this.escrever(str, function(){
      this.limpar(this.prox);
    });
  }
  prox(prox);

}
  

  function escrever(str, done) {
     var char = str.split('').reverse();
     var typer = setInterval(function() {
         if (!char.length) {
             clearInterval(typer);
             return setTimeout(done, 2000); // só para esperar um bocadinho
         }
         var next = char.pop();
         this.div.innerHTML += next;
     }, 80);
 }
 
  limpar(done) {
     var char = this.div.innerHTML;
     var nr = char.length;
     var typer = setInterval(function() {
         if (nr-- == 0) {
             clearInterval(typer);
             return done();
         }
         this.div.innerHTML = char.slice(0, nr)
     }, 25);
 }
 
  rodape(conteudos) {
     var atual = -1;
     var cont = 0;
     function prox(cb){
     cont++;
     if (atual < conteudos.length - 1) atual++;
     else atual = 0;
     var str = conteudos[atual];
    
      this.escrever(str, function(){
       this.limpar(this.prox);
     });
   }
   prox(prox);
 
 }
 */
  }
  
 }