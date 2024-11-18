import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiErrorModule, TuiLabelModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiFieldErrorPipeModule, TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { LoginService } from './login.service';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
        path: '',
        component: LoginPageComponent,
    }]),
    FormsModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiInputModule,
    TuiLabelModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
  ],
  providers: [
    LoginService,
  ],
  exports: [LoginPageComponent],
})
export class LoginModule {}
