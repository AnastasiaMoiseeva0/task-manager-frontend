import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisciplinesPageComponent } from './disciplines.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiScrollbarModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiInputModule } from '@taiga-ui/kit';
import { DisciplineService } from '../services/discipline.service';

@NgModule({
  declarations: [DisciplinesPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
        path: '',
        component: DisciplinesPageComponent,
    }]),
    TuiButtonModule,
    TuiBadgeModule,
    TuiTextfieldControllerModule,
    TuiInputModule,
    TuiScrollbarModule
  ],
  providers: [
    DisciplineService,
  ],
  exports: [DisciplinesPageComponent],
})
export class DisciplinesModule {
  
}
