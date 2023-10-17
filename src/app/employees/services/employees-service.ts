import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeAddDto } from 'src/app/Models/DTOs/EmployeeAddDto';
import { EmployeeUpdateDto } from 'src/app/Models/DTOs/EmployeeUpdateDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  
  constructor(private http: HttpClient){
  }

  getAllEmployees()
  {
    return this.http.get(environment.paseApi+'Employees');
  }
  GetEmployeeById(id:string)
  {
    return this.http.get(environment.paseApi+'Employees/'+id);
  }

  AddEmployee(employee:EmployeeAddDto)
  {
    return this.http.post(environment.paseApi+'Employees',employee);
  }

  UpdateEmployee(id:string,employee:EmployeeUpdateDto){
    return this.http.patch(environment.paseApi+'Employees/'+id , employee);
  }






}
