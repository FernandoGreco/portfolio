import { NgModule } from '@angular/core';
import { Routes, RouterModule,  ActivatedRoute, ParamMap } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { GraficoCovidComponent } from './graficos/grafico-covid/grafico-covid.component';
import { GraficoOndasComponent } from './graficos/grafico-ondas/grafico-ondas.component';
import { GraficosComponent } from './graficos/graficos.component';
import { IbovespaComponent } from './ibovespa/ibovespa.component';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutAnimalsComponent } from './layout-animals/layout-animals.component';
import { LayoutNewsComponent } from './layout-news/layout-news.component';
import { Layout2Component } from './layout2/layout2.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { SobreComponent } from './sobre/sobre.component';
import { TelasComponent } from './telas/telas.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'svgs', component: IbovespaComponent },
  { path: 'telas', component: TelasComponent,

    children: [
      {
        path: 'layout-news', // child route path
        component: LayoutNewsComponent, 
      },
      {
        path: 'layout2', // child route path
        component: Layout2Component,
      },
      {
        path: 'layoutAnimals', // child route path
        component: LayoutAnimalsComponent, // child route component that the router renders
      }
    ],

},
{path: 'graficos', component: GraficosComponent
,

    children: [
      {
        path: 'covid', // child route path
        component: GraficoCovidComponent, // child route component that the router renders
      },
      {
        path: 'ondas', // child route path
        component: GraficoOndasComponent, // child route component that the router renders
      },
      {
        path: 'layout2', // child route path
        component: Layout2Component, // child route component that the router renders
      }
    ],

},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
