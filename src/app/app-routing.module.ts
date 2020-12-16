import { NgModule } from '@angular/core';
import { Routes, RouterModule,  ActivatedRoute, ParamMap } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { IbovespaComponent } from './ibovespa/ibovespa.component';
import { InicioComponent } from './inicio/inicio.component';
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
  { path: 'telas', component: TelasComponent,

    children: [
      {
        path: 'ibovespa', // child route path
        component: IbovespaComponent, // child route component that the router renders
      },
      {
        path: 'layout-news', // child route path
        component: LayoutNewsComponent, // child route component that the router renders
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
