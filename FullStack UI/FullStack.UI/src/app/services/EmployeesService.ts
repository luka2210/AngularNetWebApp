import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { idText } from 'typescript';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.baseApiUrl.concat('api/employees'))
  }

  saveEmployee(newEmployee: Employee): Observable<Employee> {
    return this.http.post<Employee>(environment.baseApiUrl.concat('api/employees'), newEmployee)
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(environment.baseApiUrl.concat('api/employees/').concat(id))
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(environment.baseApiUrl.concat('api/employees'), employee)
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(environment.baseApiUrl.concat('api/employees/').concat(id))
  }
}
