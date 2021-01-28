import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Layout2Component } from './layout2/layout2.component';
import { LayoutAnimalsComponent } from './layout-animals/layout-animals.component';
import { LayoutNewsComponent } from './layout-news/layout-news.component';
import { TelasComponent } from './telas.component';

@NgModule({
  declarations: [ 
    TelasComponent,
    Layout2Component,
    LayoutAnimalsComponent,
    LayoutNewsComponent
     ],
  imports: [ 
      CommonModule,
      RouterModule
   ],
  providers: []
  
})
export class TelasModule { }