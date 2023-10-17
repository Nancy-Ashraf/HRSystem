import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceAddComponent } from '../../components/attendance-add/attendance-add.component';
import { AttendanceViewComponent } from '../../components/attendance-view/attendance-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AttendanceAddComponent,AttendanceViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  exports:[AttendanceAddComponent,AttendanceViewComponent]
})
export class AttendanceModule { }
