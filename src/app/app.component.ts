import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';
import { OfficeContainerComponent } from './office-container/office-container.component';
import { EmployeeDetail } from '../model/EmployeeDetail';
import { EmployeeService } from './employee.service';
import { OfficeDetail } from '../model/OfficeDetail';
import { OfficeService } from './office.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeContainerComponent, NavbarComponent, OfficeContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  showEmployeesPage: boolean = true;

  showOfficesPage: boolean = false;

  employees: EmployeeDetail[] = []

  offices: OfficeDetail[] = []

  constructor(private employeeService: EmployeeService, private officeService: OfficeService) {
    this.employeeService.getEmployees().then((response) => {
      this.employees = response.data
    })
  }

  hideAll() {
    this.showEmployeesPage = false
    this.showOfficesPage = false
  }

  showPage(page: string) {
    this.hideAll()
    switch(page) {
      case "offices": {
        this.officeService.getAllOffices().then((response) => {
          this.offices = response.data
        })
        this.showOfficesPage = true; 
        break;
      }
      case "employees": 
      default: {
        this.employeeService.getEmployees().then((response) => {
          this.employees = response.data
        })
        console.log(this.employees)
        this.showEmployeesPage = true
      }
    }
  }
}
