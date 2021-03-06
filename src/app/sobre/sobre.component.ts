import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.less']
})

export class SobreComponent implements OnInit  {

  @ViewChild('myCanvas') myDiv: ElementRef;
   public context: CanvasRenderingContext2D;
 

  constructor() {    
    
      }

  ngOnInit() {
           
      //edição do canvas  
      this.context = this.myDiv.nativeElement.getContext('2d');
      // console.log(this.context);

      //edição do css
      this.myDiv.nativeElement.style.position= 'fixed';
      this.myDiv.nativeElement.style.zIndex = '-1';
     console.log( this.myDiv.nativeElement.style);
     //  let ElementDiv = this.myDiv.nativeElement;
     //  console.log(ElementDiv.width);
   

   let particles = [];
   let particleSize = 2;
   let maxParticles = 40;
   let threshold = 70;


    for (let i = 0; i < maxParticles; i++) {
      let particle = {
        x: Math.random() * this.myDiv.nativeElement.width,
        y: Math.random() * this.myDiv.nativeElement.height,
        vx: Math.random(),
        vy: Math.random()
      }
      particles.push(particle);
    }

  
        animate(this.myDiv.nativeElement, this.context,particles,maxParticles);
       
  

      function animate(ElementDiv,context,particles,maxParticles) {    

       
         //  console.log("chamadas");
      
      //  window.requestAnimationFrame(this.animate);
       // window.requestAnimationFrame(this.animate());

     //  animate(ElementDiv,context,particles,maxParticles);

     setInterval(function() {
     // console.log("teste repetição");
     context.clearRect(0, 0, ElementDiv.width, ElementDiv.height);
     for (let i = 0; i < maxParticles; i++) {
       let particle = particles[i];
      context.fillRect(particle.x - particleSize / 2, particle.y - particleSize / 2, particleSize, particleSize);
       for (let j = 0; j < maxParticles; j++) {
         if (i != j) {
           let particle2 = particles[j];
           let distanceX = Math.abs(particle.x - particle2.x);
           let distanceY = Math.abs(particle.y - particle2.y);
           if (distanceX < threshold && distanceY < threshold) {
             context.lineWidth = ((threshold * 2) - (distanceX + distanceY)) / 50;
             let color = 200 - Math.floor(distanceX + distanceY);
            context.strokeStyle = 'rgb(' + color + ',' + color + ',' + color + ')';
            line(particle, particle2,context);
           }
         }
       }
       particle.x = particle.x + particle.vx;
       particle.y = particle.y + particle.vy;
       if (particle.x > ElementDiv.width - particleSize || particle.x < particleSize)
         particle.vx = -particle.vx;
       if (particle.y > ElementDiv.height - particleSize || particle.y < particleSize)
         particle.vy = -particle.vy;
     }

    }, 1000/60);
        
      }

         
     function line(particle, particle2,context) {
      context.beginPath();
      context.moveTo(particle.x, particle.y);
      context.lineTo(particle2.x, particle2.y);
      context.stroke();
    }
       
  
       

  }

}
