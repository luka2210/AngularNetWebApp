import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/EmployeesService';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee = {
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    email: '',
    department: '',
    phone: 0,
    salary: 0
  }

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get("id")

        if (id) {
          this.employeesService.getEmployee(id).subscribe({
            next: employee => {
              this.employee = employee
            },
            error: err => {
              console.log(err)
            }
          })
        }
      }
    })
  }

  updateEmployee(): void {
    this.employeesService.updateEmployee(this.employee)
        .subscribe({
          next: employee => {
            this.router.navigate(['employees'])
          },
          error: err => {
            console.log(err)
          }
        })
    console.log(this.employee)
  }

  deleteEmployee(id: string): void {
    this.employeesService.deleteEmployee(id)
        .subscribe({
          next: resposnse => {
            this.router.navigate(['employees'])
          },
          error: err => {
            console.log(err)
          }
        })
  }
}
