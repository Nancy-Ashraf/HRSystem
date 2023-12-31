import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
  ]
})
export class SharedModule { }
