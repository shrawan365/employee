import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from 'src/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employee');
  }
  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseApiUrl + '/api/Employee', addEmployeeRequest);
  }
  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/Employee/' + id);
  }
  editEmployee(id: number, editEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/Employee/' + id, editEmployeeRequest);
  }
  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + '/api/Employee/' + id);
  }
}
