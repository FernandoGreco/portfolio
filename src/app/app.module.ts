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
import { LayoutAnimalsComponent } from './layout-animals/layout-animals.component';
import { GraficosModule } from './graficos/graficos.module';


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
    LayoutAnimalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraficosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
