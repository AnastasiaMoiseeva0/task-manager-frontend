import { Route } from '@angular/router';
import { disciplineRoutes } from '../discipline/discipline-routes';
import { MainComponent } from './main.component';

export const mainRoutes: Route[] = [
    {
        path:"",
        component: MainComponent,
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
