import { AuthGuard } from '../guards/canActivateRouteGuard';

export const disciplineRoutes = [
  {
    path: 'disciplines',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./disciplines/disciplines.module').then(
        (m) => m.DisciplinesModule
      ),
  },
  {
    path: 'disciplines/create',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./create-discipline/create-discipline.module').then(
        (m) => m.CreateDisciplineModule
      ),
  },
  {
    path: 'disciplines/:id',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./disciplie-details/discipline.module').then(
        (m) => m.DisciplineModule
      ),
  },
];
