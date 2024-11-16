import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { appRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { API_URL } from './tokens/api-url.token';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { environment } from '../environments/environment-interface';
import { TuiRootModule, TuiDialogModule, TuiAlertModule } from '@taiga-ui/core';
import { RegisterService } from './register/register.service';
import { LoginService } from './login/login.service';
import { SessionStorageService } from './services/session.service';
import { CacheService } from './services/cache.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localeRu from '@angular/common/locales/ru';
import { TokenInterceptor } from './interceptors/token-interceptor';

registerLocaleData(localeRu);

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [AppComponent],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    RegisterService,
    LoginService,
    SessionStorageService,
    CacheService,
    {
      provide: API_URL,
      useValue: environment.apiUrl,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
