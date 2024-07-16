import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeContainerComponent } from './employee-container/employee-container.component';
import { TitleComponent } from './title/title.component';
import { OfficeContainerComponent } from './office-container/office-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeContainerComponent, NavbarComponent, TitleComponent, OfficeContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Employees";

  showEmployeesPage: boolean = true;

  showOfficesPage: boolean = false;

  hideAll() {
    this.showEmployeesPage = false
    this.showOfficesPage = false
  }

  showPage(page: string) {
    this.hideAll()
    switch(page) {
      case "offices": {
        this.title = "Offices"
        this.showOfficesPage = true; 
        break;
      }
      case "employees": 
      default: {
        this.title = "Employees"
        this.showEmployeesPage = true
      }
    }
  }
}
