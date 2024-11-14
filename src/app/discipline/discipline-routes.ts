export const disciplineRoutes = [
  {
    path: 'disciplines',
    loadChildren: () =>
      import('./disciplines/disciplines.module').then(
        (m) => m.DisciplinesModule
      ),
  },
  {
    path: 'disciplines/create',
    loadChildren: () =>
      import('./create-discipline/create-discipline.module').then(
        (m) => m.CreateDisciplineModule
      ),
  },
  {
    path: 'disciplines/:id',
    loadChildren: () =>
      import('./disciplie-details/discipline.module').then(
        (m) => m.DisciplineModule
      ),
  },
];
