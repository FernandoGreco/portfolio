import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GraficoCovidComponent } from './grafico-covid/grafico-covid.component';
import { GraficoOndasComponent } from './grafico-ondas/grafico-ondas.component';
import { GraficosComponent } from './graficos.component';


@NgModule({
  declarations: [ 
      GraficosComponent,
      GraficoCovidComponent,
      GraficoOndasComponent
     ],
  imports: [ 
      CommonModule,
      RouterModule
   ],
  providers: []
  
})
export class GraficosModule { }
