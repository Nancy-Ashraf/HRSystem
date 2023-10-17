import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees-service';
import { EmployeesListDto } from 'src/app/Models/DTOs/EmployeesListDto';
import {Router} from '@angular/router';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit{
  employees: EmployeesListDto[] = []; 
  attendanceDate:any
  
  constructor(private employeeService: EmployeesService, private router:Router) {
  }
  ngOnInit(): void {
    this.getAllEmployees()
  }

  

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (emps:any) => {
        this.employees = emps; 
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateEmployee(id:string){
    this.router.navigate(["/Employees/Update/"+id]);
  }



}
