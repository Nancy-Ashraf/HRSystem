import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { EmployeesService } from '../../services/employees-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  form!:FormGroup
  constructor(private buid:FormBuilder,private employeeService: EmployeesService, private router: Router){}

  ngOnInit(): void {
    this.form=this.buid.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      group:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]]
      
    })
  }

  addEmployee(){
    const newEmp=this.form.value;
    this.employeeService.AddEmployee(newEmp).subscribe(res=>{
      
      alert("employee number "+Object.values(res)+" has been added sucessfully");
      this.router.navigate(['/Employees']);
    })
  }
}
