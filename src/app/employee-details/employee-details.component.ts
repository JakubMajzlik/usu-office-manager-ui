import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeDetail } from '../../model/EmployeeDetail';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {

  constructor(private employeeService: EmployeeService) {}

  
  @Input() employee: EmployeeDetail | null = null;

  @Output() updateEmployeeEvent = new EventEmitter<EmployeeDetail>()

  setEmployee(employee: EmployeeDetail) {
    this.employee = employee;
  }

  updateEmployee() {
    if (this.employee != null) {
      this.updateEmployeeEvent.emit(this.employee)
    }
  }

  deleteEmployee() {
    if (this.employee != null) {
      this.employeeService.deleteEmployee(this.employee)
    }
  }
}
