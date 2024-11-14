import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateDisciplinePageComponent } from './create-discipline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiDataListModule, TuiErrorModule, TuiLabelModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiComboBoxModule, TuiDataListWrapperModule, TuiFieldErrorPipeModule, TuiFilesModule, TuiInputFilesModule, TuiInputModule, TuiInputTagModule, TuiSelectModule, TuiStringifyContentPipeModule, TuiTextareaModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [CreateDisciplinePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
        path: '',
        component: CreateDisciplinePageComponent,
    }]),
    TuiButtonModule,
    TuiBadgeModule,
    TuiTextfieldControllerModule,
    TuiInputModule,
    TuiLabelModule,
    TuiSelectModule, 
    TuiDataListModule,
    TuiInputTagModule,
    TuiTextareaModule,
    TuiFilesModule,
    TuiInputFilesModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule
  ],
  exports: [CreateDisciplinePageComponent],
})
export class CreateDisciplineModule {
  
}
