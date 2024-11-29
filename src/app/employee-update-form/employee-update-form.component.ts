import { Component, Input } from '@angular/core';
import { EmployeeDetail } from '../../model/EmployeeDetail';
import { EmployeeService } from '../employee.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { OfficeTableDetail } from '../../model/OfficeDetail';

@Component({
  selector: 'app-employee-update-form',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './employee-update-form.component.html',
  styleUrl: './employee-update-form.component.scss'
})
export class EmployeeUpdateFormComponent {

  @Input() employee: EmployeeDetail | null = null

  @Input() tables: OfficeTableDetail[] = []

  @Input() selectedTable: OfficeTableDetail | null = null;

  constructor(private employeeService: EmployeeService,) { }

  updateEmployee() {
    if (this.employee != null) {
      this.employeeService.updateEmployee(this.employee)
      if (this.selectedTable != null) {
        this.employeeService.attachToTable(this.employee, this.selectedTable)
      }
    }
  }


}
