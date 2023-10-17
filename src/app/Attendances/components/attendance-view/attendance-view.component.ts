import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendance-view',
  templateUrl: './attendance-view.component.html',
  styleUrls: ['./attendance-view.component.scss']
})
export class AttendanceViewComponent implements OnInit {
  attendances:any
  id:any;
  constructor(private attendanceService:AttendanceService,private route:ActivatedRoute){}
  ngOnInit(): void {
  this.id=this.route.snapshot.paramMap.get('id');
    this.attendanceService.getAttendancseOfEmployee(this.id).subscribe((atts)=>{
      this.attendances=atts
    })
  }
  

}
