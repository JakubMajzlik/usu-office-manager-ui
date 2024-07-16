import { Component } from '@angular/core';
import axios from 'axios';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create-form',
  standalone: true,
  imports: [],
  templateUrl: './employee-create-form.component.html',
  styleUrl: './employee-create-form.component.scss'
})
export class EmployeeCreateFormComponent {

  constructor(private employeeService: EmployeeService) {}

  createEmployee(){
    // this.employeeService.createNewEmployee()
  }
  
}
