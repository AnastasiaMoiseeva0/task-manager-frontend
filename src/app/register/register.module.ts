import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiErrorModule, TuiLabelModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiFieldErrorPipeModule, TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
        path: '',
        component: RegisterPageComponent,
    }]),
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiInputModule,
    TuiLabelModule,
    TuiInputPasswordModule,
    TuiFieldErrorPipeModule,
    TuiErrorModule,
    TuiButtonModule
  ],
  exports: [RegisterPageComponent],
})
export class RegisterModule {}
