export interface EmployeeViewDto{
    id:number,
    name:string,
    email:string,
    group:'HR' | 'Normal Employee',
    username:string,
    password:string,
  }