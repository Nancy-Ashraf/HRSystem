import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';

import{HttpClientModule} from '@angular/common/http';

import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';






@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeeViewComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
  ],
  imports: [
    MatSnackBarModule,CommonModule,RouterModule,ReactiveFormsModule,

  ],
  exports:[
    EmployeesListComponent,
    EmployeeViewComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    HttpClientModule,
   

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeesModule { }
