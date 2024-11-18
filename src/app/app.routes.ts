import { Route } from '@angular/router';
import { AuthGuard } from './guards/canActivateRouteGuard';

export const appRoutes: Route[] = [
    {
        path:"register",
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
    },
    {
        path:"login",
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    },
    {
        path:"",
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    }
];
