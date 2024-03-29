import { Route } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'apps/employee-form',
    pathMatch:"full"
  },
  { path: 'apps/employee-form', component: EmployeeFormComponent },
];
