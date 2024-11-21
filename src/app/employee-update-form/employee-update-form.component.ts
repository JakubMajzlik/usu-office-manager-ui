import { Component, Input } from '@angular/core';
import { EmployeeDetail } from '../../model/EmployeeDetail';
import { EmployeeService } from '../employee.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-update-form',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './employee-update-form.component.html',
  styleUrl: './employee-update-form.component.scss'
})
export class EmployeeUpdateFormComponent {

  @Input() employee: EmployeeDetail | null = null

  constructor(private employeeService: EmployeeService) { }

  updateEmployee() {
    if (this.employee != null) {
      this.employeeService.updateEmployee(this.employee)
    }
  }


}
