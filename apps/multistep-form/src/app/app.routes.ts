import { Route } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { AspFormComponent } from './components/asp-form/asp-form.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'asp-form',
    pathMatch:"full"
  },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'asp-form', component: AspFormComponent },
];
