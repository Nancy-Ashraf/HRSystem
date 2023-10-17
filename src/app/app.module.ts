import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EmployeesModule } from './employees/employees.module';



import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './Authentication/Interceptors/authentication.interceptor';
import { AttendanceModule } from './Attendances/module/attendance/attendance.module';






@NgModule({
  declarations: [
    AppComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    EmployeesModule,
    AttendanceModule,
    ReactiveFormsModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,

    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthenticationInterceptor,
      multi:true
    }
  ],
  exports:[
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
