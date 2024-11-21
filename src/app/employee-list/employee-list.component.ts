import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeDetail } from '../../model/EmployeeDetail';
import axios from 'axios';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  
  constructor(private employeeService: EmployeeService) {}
  
  @Input() employees: EmployeeDetail[] = []

  @Output() selectedEmployeeEvent = new EventEmitter<EmployeeDetail>();

  selectEmployee(employee: EmployeeDetail) {
    this.selectedEmployeeEvent.emit(employee)
  }
}

