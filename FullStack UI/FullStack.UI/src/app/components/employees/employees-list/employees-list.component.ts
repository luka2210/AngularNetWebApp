import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  staticEmployee1: Employee = {
    id: "sdasdasdjkashdaskdqid",
    name: "Momcilo",
    email: "moco123@gmail.com",
    department: "based",
    phone: 225883,
    salary: 700
  }

  staticEmployee2: Employee = {
    id: "egjkaskdieijfincad",
    name: "Kalu",
    email: "kalu123@gmail.com",
    department: "based",
    phone: 245365,
    salary: 344
  }

  staticEmployee3: Employee = {
    id: "asdjksnascadknvisd",
    name: "Kalulu",
    email: "kalulu@gmail.com",
    department: "based",
    phone: 254313,
    salary: 720
  }

  employees: Employee[] = [this.staticEmployee1, this.staticEmployee2, this.staticEmployee3]

  constructor() { }

  ngOnInit(): void {

  }

}
