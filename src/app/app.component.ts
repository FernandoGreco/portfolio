import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'portifolio';

 vetorMenu = ["menus", "menus2", "menus3", "menus4" ];

 vetorIconeMenu = ["iconeMenu","iconeMenu2","iconeMenu3"];

 fOurT = false;

  luz(){

       let label = document.getElementById('label');
       let x = document.getElementById('Xspan');
       let lua = document.getElementById('lua');
       let luz = document.getElementById('luz');
       let inicio = document.getElementById('fundo');
 
        if( this.fOurT === false){
          this.fOurT = true;

          label.style.backgroundColor = 'white';      
          x.style.color = '#2250a0';
          inicio.style.backgroundColor = 'white';
         

          lua.style.display = 'inherit';
          luz.style.display = 'none';

          for (var i = 0; i < this.vetorIconeMenu.length; i++) {
            document.getElementById(this.vetorIconeMenu[i]).style.backgroundColor = '#2250a0';
                      }
                      
          for (var i = 0; i < this.vetorMenu.length; i++) {                        
         document.getElementById(this.vetorMenu[i]).style.backgroundColor = 'white';
         document.getElementById(this.vetorMenu[i]).style.color = 'black';

                                     }              
        } 
        

        else
        
            //estilo aplicado para luz ligada
        {
          label.style.backgroundColor = '#2F4F4F';
          x.style.color = 'yellow';
          inicio.style.backgroundColor = '#2F4F4F';

          lua.style.display = 'none';
          luz.style.display = 'inherit';
          
          for (var i = 0; i < this.vetorIconeMenu.length; i++) {
            document.getElementById(this.vetorIconeMenu[i]).style.backgroundColor = 'yellow';
                      }  

          for (var i = 0; i < this.vetorMenu.length; i++) {                        
            document.getElementById(this.vetorMenu[i]).style.backgroundColor = '#2F4F4F';
            document.getElementById(this.vetorMenu[i]).style.color = 'white';
                                   }            

          this.fOurT = false;
        }

      
      }

   menu(){

    var x = document.getElementById("menus");
    

    if(x.style.display === "none"){
        
        for (var i = 0; i < this.vetorMenu.length; i++) {
            document.getElementById(this.vetorMenu[i]).style.display = 'inline-block';
                         }     
  
        for (var i = 0; i < this.vetorIconeMenu.length; i++) {
            document.getElementById(this.vetorIconeMenu[i]).style.display = 'none';
                        }                              
      document.getElementById("x").style.display= 'inline-block';
    
    }
    else{
        for (var i = 0; i < this.vetorMenu.length; i++) {
            document.getElementById(this.vetorMenu[i]).style.display = 'none';
                         } 
                         
         for (var i = 0; i < this.vetorIconeMenu.length; i++) {
           document.getElementById(this.vetorIconeMenu[i]).style.display = 'inherit';
                     }                  

      document.getElementById("x").style.display= 'none';
    }    
    }

  
}
