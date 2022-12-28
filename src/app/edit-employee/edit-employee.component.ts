import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/model/employee.model';
import { EmployeeServiceService } from '../Service/employee-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  editEmployeeRequest: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
  };
  constructor(private route: ActivatedRoute, private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: (response) => {
              this.editEmployeeRequest = response;
            }
          })
        }
      }
    })
  }
  editEmployee() {
    this.employeeService.editEmployee(this.editEmployeeRequest.id, this.editEmployeeRequest).subscribe({
      next: (response) => {
        this.router.navigate(['Home']);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
