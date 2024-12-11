import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';
import { OfficeContainerComponent } from './office-container/office-container.component';
import { EmployeeDetail } from '../model/EmployeeDetail';
import { EmployeeService } from './employee.service';
import { OfficeDetail, OfficeDetailResponse, OfficeTableDetail, OfficeTableDetailResponse } from '../model/OfficeDetail';
import { OfficeService } from './office.service';
import { OfficeTableService } from './officeTable.service';

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

  constructor(
    private employeeService: EmployeeService, 
    private officeService: OfficeService,
    private officeTableService: OfficeTableService
  ) {
    this.loadEmployees()
  }

  private loadOffices() {
    this.officeService.getAllOffices().then((officesResponse) => {

      const officesResponseData: OfficeDetailResponse[] = officesResponse.data

      const mappedOffices: OfficeDetail[] = []
      officesResponseData.map((officeRes) => {

        return this.officeTableService.getOfficeTables().then((tablesResponse) => ({
            id: officeRes.id,
            name: officeRes.name,
            area: officeRes.area,
            tables: (tablesResponse.data as OfficeTableDetailResponse[])
              .filter((it) => it.officeId === officeRes.id)
              .map((it) => ({id: it.id, name: it.name, utilizedArea: it.utilizedArea, office: null, employee: null}))
          
        }))
      }).forEach((it) => it.then((itt) => mappedOffices.push(itt)))
      this.offices = mappedOffices

    })
  }

  private loadEmployees() {
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
        this.loadOffices()
        this.showOfficesPage = true; 
        break;
      }
      case "employees": 
      default: {
        this.loadEmployees()

        this.showEmployeesPage = true
      }
    }
  }
}
