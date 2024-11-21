import { Component, Input, input } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetail } from '../../model/EmployeeDetail';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeCreateFormComponent } from '../employee-create-form/employee-create-form.component';
import { EmployeeUpdateFormComponent } from '../employee-update-form/employee-update-form.component';
import { TranslateModule } from '@ngx-translate/core';

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

  @Input() employees: EmployeeDetail[] = []

  private hideAll() {
    this.showDetail = false
    this.showCreateForm = false
    this.showEditForm = false
  }

  showEmployeeDetails(employee: EmployeeDetail) {
    this.hideAll()
    this.selectedEmployee = employee
    this.showDetail = true
  }

  showCreateEmployeeForm() {
    this.hideAll()
    this.showCreateForm = true
  }

  showUpdateEmployeeForm() {
    this.hideAll()
    this.showEditForm = true
  }

}
