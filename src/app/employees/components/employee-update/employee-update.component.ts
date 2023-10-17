import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { EmployeesService } from '../../services/employees-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss'],
})
export class EmployeeUpdateComponent {
  id: any;
  updatedEmp: any;
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    group: new FormControl('', [Validators.required]),
  });

  constructor(
    private employeeService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === null) {
      this.id = ' '; // Assign a default value
    }

    this.employeeService.GetEmployeeById(this.id).subscribe((emp) => {
      this.updatedEmp = emp;
      this.form.patchValue(emp);
    });
  }

  updateEmployee() {
    const newEmp = this.form.value;
    if (this.id === null) {
      this.id = ' '; 
    }
    this.employeeService.UpdateEmployee(this.id, newEmp).subscribe((res) => {
      this.router.navigate(['/Employees']);

    });
  }
}
