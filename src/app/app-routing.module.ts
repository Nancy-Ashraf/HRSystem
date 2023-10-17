import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees/components/employees-list/employees-list.component';
import { EmployeeViewComponent } from './employees/components/employee-view/employee-view.component';
import { EmployeeAddComponent } from './employees/components/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employees/components/employee-update/employee-update.component';
import { HomeComponent } from './shared/components/home/home.component';
import { authenticationGuard } from './Authentication/Guards/authentication.guard';
import { AttendanceViewComponent } from './Attendances/components/attendance-view/attendance-view.component';
import { AttendanceAddComponent } from './Attendances/components/attendance-add/attendance-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'authentication',
    loadChildren: () =>
      import(
        './Authentication/authentication/authentication.module'
      ).then((m) => m.AuthenticationModule),
  },
  { path: 'Employees',canActivate:[authenticationGuard], component: EmployeesListComponent },
  { path: 'Employees/Add',canActivate:[authenticationGuard], component: EmployeeAddComponent },
  { path: 'attendance/:id',canActivate:[authenticationGuard], component: AttendanceViewComponent },
  { path: 'Employees/:id',canActivate:[authenticationGuard], component: EmployeeViewComponent },
  { path: 'attendance/Add/:id',canActivate:[authenticationGuard], component: AttendanceAddComponent },
  { path: 'Employees/Update/:id',canActivate:[authenticationGuard], component: EmployeeUpdateComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
