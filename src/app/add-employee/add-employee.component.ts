import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/model/employee.model';
import { EmployeeServiceService } from '../Service/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
  };
  constructor(private employeeService: EmployeeServiceService, private router: Router) { }
 
  ngOnInit(): void {
  }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        this.router.navigate(['Home']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
