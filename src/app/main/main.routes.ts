import { Route } from '@angular/router';
import { disciplineRoutes } from '../discipline/discipline-routes';
import { MainComponent } from './main.component';
import { AuthGuard } from '../guards/canActivateRouteGuard';

export const mainRoutes: Route[] = [
    {
        path:"",
        component: MainComponent,
        canActivateChild: [AuthGuard],
        children: [
            ...disciplineRoutes,
            {
                path: '',
                redirectTo: 'disciplines',
                pathMatch: 'full'
            }
        ],
    }
];
