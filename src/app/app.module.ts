import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';
import { IbovespaComponent } from './ibovespa/ibovespa.component';
import { GraficosModule } from './graficos/graficos.module';
import { TelasModule } from './telas/telas.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreComponent,
    ProjetosComponent,
    ContatoComponent,
    IbovespaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraficosModule,
    TelasModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
