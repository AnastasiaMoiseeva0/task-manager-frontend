import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { mainRoutes } from './main.routes';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
],
  exports: [MainComponent],
  providers: [
    
  ],
  bootstrap: [MainComponent],
})
export class MainModule {}
