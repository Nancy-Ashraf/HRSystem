import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { 
    
  }
  getAttendancseOfEmployee(employeeId: string)
  {
    return this.http.get(environment.paseApi+'attendance/'+employeeId);
  }

  AddAttendanceToEmp(employeeId: string, date: Date)
  {
    const attendance={employeeId,date}
    return this.http.post(environment.paseApi+'attendance',attendance);
  }
}
