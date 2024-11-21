import { Component, Input } from '@angular/core';
import axios from 'axios';
import { EmployeeService } from '../employee.service';
import { EmployeeDetail } from '../../model/EmployeeDetail';
import { FormBuilder, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-employee-create-form',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './employee-create-form.component.html',
  styleUrl: './employee-create-form.component.scss'
})
export class EmployeeCreateFormComponent {

  @Input() allEmployees: EmployeeDetail[] = []

  showError: boolean = false

  errorMessage: String = ""

  newEmployeeForm = {
    firstName: '',
    lastName: '',
    number: '',
    address: '',
    startDate: Date
  }

  constructor(
    private employeeService: EmployeeService
  ) { }

  createNewEmployee(){
    const employee: EmployeeDetail = {
      id: 0,
      firstName: this.newEmployeeForm.firstName,
      lastName: this.newEmployeeForm.lastName,
      address: this.newEmployeeForm.address,
      startDate: this.newEmployeeForm.startDate.toString()
    };
    this.employeeService.createNewEmployee(employee).then((_) => {
       this.allEmployees.push(employee)
    })

   
  }
  
}
