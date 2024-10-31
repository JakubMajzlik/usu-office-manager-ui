import { Component } from '@angular/core';
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

  
  showError: boolean = false

  errorMessage: String = ""

  newEmployeeForm = {
    firstName: '',
    lastName: '',
    number: '',
    street: '',
    city: '',
    zip: '',
    country: '',
    startDate: Date
  }

  constructor(
    private employeeService: EmployeeService
  ) { }

  createNewEmployee(){
    console.log("test")
    if (isNaN(Number(this.newEmployeeForm.number))) {
      this.errorMessage = "House number have to be a number"
      this.showError = true
      return
    }

    if (isNaN(Number(this.newEmployeeForm.zip.replaceAll(" ", "")))) {
      this.errorMessage = "Zip have to be a number"
      this.showError = true
      return
    }
    // this.employeeService.createNewEmployee()
  }
  
}
