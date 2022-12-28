import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/model/employee.model';
import { EmployeeServiceService } from '../Service/employee-service.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {

  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: ''
  }
  constructor(private route: ActivatedRoute, private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: (response) => {
              this.employee = response;
            }
          })
        }
      }
    })
  }
  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employee.id).subscribe({
      next: (response) => {
        this.router.navigate(['Home']);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
