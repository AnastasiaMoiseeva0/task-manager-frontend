import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { EMPTY, catchError, take, tap } from 'rxjs';
import { TuiAlertService } from '@taiga-ui/core';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Введите значение',
        email: 'Введите корретное значение email',
      },
    },
  ],
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private loginService: LoginService,
    private tuiAlertService: TuiAlertService,
    private router: Router
  ) { }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    this.loginService
      .authorize(email!, password!)
      .pipe(
        tap(() => {
          this.router.navigateByUrl('/schedule');
        }),
        catchError(() => {
          this.showErrorNotification();
          return EMPTY;
        })
      )
      .subscribe();
  }

  private showErrorNotification() {
    this.tuiAlertService
      .open('При авторизации произошла ошибка', {
        status: 'error',
        autoClose: false,
      })
      .pipe(take(1))
      .subscribe();
  }
}
