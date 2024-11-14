import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { take } from 'rxjs';
import { TuiAlertService } from '@taiga-ui/core';
import { Router } from '@angular/router';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';

@Component({
  selector: 'app-auth-page',
  templateUrl: './register.component.html',
  styleUrl: './register.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Введите значение',
        email: 'Введите корректное значение',
      },
    },
  ],
})
export class RegisterPageComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private registerService: RegisterService,
    private tuiAlertService: TuiAlertService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.registerService.register(email!, password!).subscribe({
        next: () => {
          this.router.navigateByUrl('');

          this.tuiAlertService
            .open('Вы зарегистрированы', {
              status: 'success',
              autoClose: false,
            })
            .pipe(take(1))
            .subscribe();
        },
        error: (error) => {
          this.tuiAlertService
            .open('При регистрации произошла ошибка', {
              status: 'error',
              autoClose: false,
            })
            .pipe(take(1))
            .subscribe();
          console.error('Registration error', error);
        },
      });
    }
  }
}
