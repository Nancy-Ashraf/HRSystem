import { trigger} from '@angular/animations';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { AttendanceService } from '../../services/attendance.service';




@Component({
  selector: 'app-attendance',
  templateUrl: './attendance-add.component.html',
  styleUrls: ['./attendance-add.component.scss'],
  animations: [
    trigger('yourAnimationName', [
      // animation definitions
    ]),
  ],
})

export class AttendanceAddComponent{

  attendanceForm: FormGroup;
  id:any;

constructor(private fb: FormBuilder,private attendanceService:AttendanceService, private route:ActivatedRoute) {
  this.attendanceForm = this.fb.group({
    employeeName: ['inputField', Validators.required],
    date: ['date', Validators.required]
  });

  this.id=this.route.snapshot.paramMap.get('id');
}



setEmployeeAttendance(){
  const date=this.attendanceForm.get('date')?.value;
  this.attendanceService.AddAttendanceToEmp(this.id,date).subscribe();
}

}
