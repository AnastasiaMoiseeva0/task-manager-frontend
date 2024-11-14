import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { mainRoutes } from './main.routes';
import { HeaderModule } from "../header/header.module";

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    HeaderModule
],
  exports: [MainComponent],
  providers: [
    
  ],
  bootstrap: [MainComponent],
})
export class MainModule {}
