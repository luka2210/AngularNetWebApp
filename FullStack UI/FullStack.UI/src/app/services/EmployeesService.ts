import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';


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
}
