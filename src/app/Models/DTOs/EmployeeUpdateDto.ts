export interface EmployeeUpdateDto{
    name:string,
    email:string,
    group:'HR' | 'Normal Employee',
  }