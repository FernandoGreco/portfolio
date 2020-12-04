import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.less']
})
export class InicioComponent implements OnInit {

  div = document.getElementById('log');
  textos = ['Desenvolvimento de Sistemas', 'Layout Responsivo', 'Front-End e Back-End [Júnior]','PHP, Mysql, JavaScript e CSS','Bootstrap, SASS, Gulp, Angular 2+, Composer, Laravel, GIT, NPM'];
 

  

  constructor() { 
    
  }

  ngOnInit() {
    this.rodape('ala');
  }
 

   escrever(str, done) {
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

teste(){
  console.log('test ok');

}

}