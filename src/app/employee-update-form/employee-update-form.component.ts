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

  updatedEmployee = {
    id: 0,
    firstName: '',
    lastName: '',
    address: {
      number: '',
      street: '',
      city: '',
      zip: '',
      country: ''
    }
  }

  setEmployeeData(employee: EmployeeDetail): EmployeeDetail {
    return this.updatedEmployee = {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      address: {
        number: employee.address.number,
        street: employee.address.street,
        city: employee.address.city,
        zip: employee.address.zip,
        country: employee.address.country,
      }

    };
  }

  updateEmployee() {
    if (this.employee != null) {
      this.employeeService.updateEmployee(this.employee)
    }
  }


}
