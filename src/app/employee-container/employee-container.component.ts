import { Component, Input, input } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetail } from '../../model/EmployeeDetail';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeCreateFormComponent } from '../employee-create-form/employee-create-form.component';
import { EmployeeUpdateFormComponent } from '../employee-update-form/employee-update-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { OfficeTableDetail } from '../../model/OfficeDetail';
import { OfficeTableService } from '../officeTable.service';

@Component({
  selector: 'app-employee-container',
  standalone: true,
  imports: [EmployeeListComponent, EmployeeDetailsComponent, EmployeeCreateFormComponent, EmployeeUpdateFormComponent, TranslateModule],
  templateUrl: './employee-container.component.html',
  styleUrl: './employee-container.component.scss'
})
export class EmployeeContainerComponent {
  showDetail: boolean = false

  showCreateForm: boolean = false

  showEditForm: boolean = false

  selectedEmployee: EmployeeDetail | null = null;

  selectedEmployeeTable: OfficeTableDetail | null = null;

  tables: OfficeTableDetail[] = []

  @Input() employees: EmployeeDetail[] = []

  constructor(private officeTableService: OfficeTableService) { }

  private hideAll() {
    this.showDetail = false
    this.showCreateForm = false
    this.showEditForm = false
  }

  showEmployeeDetails(employee: EmployeeDetail) {
    this.hideAll()
    this.selectedEmployee = employee
    this.showDetail = true
    if (employee.officeTableId != null) {
      this.officeTableService.getOfficeTable(employee.officeTableId).then((response) => {
        this.selectedEmployeeTable = response.data
      })
    } else {
      this.selectedEmployeeTable = null
    }
  }

  showCreateEmployeeForm() {
    this.hideAll()
    this.showCreateForm = true
  }

  showUpdateEmployeeForm() {
    this.hideAll()
    this.showEditForm = true
    this.officeTableService.getOfficeTables().then((response) => {
      this.tables = (response.data as OfficeTableDetail[]).filter((table) => table.employee == null || table.employee.id === this.selectedEmployee?.id)
    })
  }

}
