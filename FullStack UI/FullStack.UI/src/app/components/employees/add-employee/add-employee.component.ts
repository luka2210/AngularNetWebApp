import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/EmployeesService';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  newEmployee: Employee = {
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    email: '',
    department: '',
    phone: 0,
    salary: 0
  }

  constructor(private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    this.employeesService.saveEmployee(this.newEmployee)
        .subscribe({
          next: employee => {
            this.router.navigate(['employees'])
          },
          error: err => {
            console.log(err)
          }
        })
    console.log(this.newEmployee)
  }
}
