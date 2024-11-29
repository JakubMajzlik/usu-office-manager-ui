import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeDetail } from '../../model/EmployeeDetail';
import { EmployeeService } from '../employee.service';
import { TranslateModule } from '@ngx-translate/core';
import { OfficeTableDetail } from '../../model/OfficeDetail';
import { OfficeTableService } from '../officeTable.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {

  constructor(
    private employeeService: EmployeeService,
    private officeTableService: OfficeTableService
  ) { }

  @Input() allEmployees: EmployeeDetail[] = []


  @Input() employee: EmployeeDetail | null = null;

  @Output() updateEmployeeEvent = new EventEmitter<EmployeeDetail>()

  @Input() table: OfficeTableDetail | null = null

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
      this.employeeService.deleteEmployee(this.employee).then((_) => {
        const index = this.allEmployees.indexOf(this.employee!)
        this.allEmployees.splice(index, 1)
      })
    }
  }
}
