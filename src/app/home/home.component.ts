import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/employee.model';
import { EmployeeServiceService } from '../Service/employee-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (employees) => {
        console.log(employees);
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
