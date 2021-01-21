import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';
import { TelasComponent } from './telas/telas.component';
import { IbovespaComponent } from './ibovespa/ibovespa.component';
import { LayoutNewsComponent } from './layout-news/layout-news.component';
import { Layout2Component } from './layout2/layout2.component';
import { GraficosComponent } from './graficos/graficos.component';
import { LayoutAnimalsComponent } from './layout-animals/layout-animals.component';
import { GraficoCovidComponent } from './grafico-covid/grafico-covid.component';
import { GraficoOndasComponent } from './grafico-ondas/grafico-ondas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreComponent,
    ProjetosComponent,
    ContatoComponent,
    TelasComponent,
    IbovespaComponent,
    LayoutNewsComponent,
    Layout2Component,
    GraficosComponent,
    LayoutAnimalsComponent,
    GraficoCovidComponent,
    GraficoOndasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
