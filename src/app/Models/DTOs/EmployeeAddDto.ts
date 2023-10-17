export interface EmployeeAddDto{
    name:string,
    email:string,
    group:'HR' | 'Normal Employee',
    username:string,
    password:string,
  }