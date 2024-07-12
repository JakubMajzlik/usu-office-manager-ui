import { Component, Output } from '@angular/core';
import { EmployeeDetail } from '../../model/EmployeeDetail';

const mockedJson = `
[
  { 
      "firstName": "Jakub",
      "lastName": "Majzlik",
      "address": {
        "number": 20,
        "street": "Street A",
        "city": "City A",
        "zip": "123 23",
        "country": "Country A"
      }
  },
  { 
      "firstName": "Stanislav",
      "lastName": "Petrek",
      "address": {
        "number": 30,
        "street": "Street B",
        "city": "City B",
        "zip": "456 78",
        "country": "Country B"
      }
  }
]`;

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  employeeList = JSON.parse(mockedJson) as EmployeeDetail[]

  showDetail: boolean = false

  selectedEmployee: EmployeeDetail | null = null;

  showEmployeeDetails(employee: EmployeeDetail) {
    this.selectedEmployee = employee
    this.showDetail = true
  }

}



