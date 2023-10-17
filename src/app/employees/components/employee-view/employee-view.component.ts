import { Component,OnInit} from '@angular/core';
import { EmployeesService } from '../../services/employees-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {

  id:any;
  employee:any;
  

  constructor(private employeeService:EmployeesService, private route:ActivatedRoute){
    this.id=this.route.snapshot.paramMap.get('id');
  }
  
  ngOnInit(): void {
    this.getEmployeeById(this.id);
  }

  getEmployeeById(id:string){
    this.employeeService.GetEmployeeById(id).subscribe(emp=>{
      this.employee=emp},error=>{
        alert(error)
      });
  }


}
