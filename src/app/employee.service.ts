import { Injectable } from '@angular/core';
import { EmployeeDetail } from '../model/EmployeeDetail';
import axios from 'axios';
const API_URL = "http://localhost:8080/api";


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
  },
  { 
      "firstName": "Employee",
      "lastName": "Number3",
      "address": {
        "number": 30,
        "street": "Street B",
        "city": "City B",
        "zip": "456 78",
        "country": "Country B"
      }
  },
  { 
      "firstName": "Employee",
      "lastName": "Number4",
      "address": {
        "number": 30,
        "street": "Street B",
        "city": "City B",
        "zip": "456 78",
        "country": "Country B"
      }
  }
]`;



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: EmployeeDetail[] = JSON.parse(mockedJson) as EmployeeDetail[]

  constructor() { }

  getEmployees() {
    return this.employeeList
  }

  createNewEmployee(newEmployee: EmployeeDetail) {
    axios.post(`${API_URL}/employee`, newEmployee)
  }
  refreshEmployeeList() {
    axios.get(`${API_URL}/employee`).then((response) => {
      this.employeeList = JSON.parse(response.data) as EmployeeDetail[]
    })
  }

  updateEmployee(updatedEmployee: EmployeeDetail) {
    axios.put(`${API_URL}/employee/${updatedEmployee.id}`, updatedEmployee)
  }

  deleteEmployee(employee: EmployeeDetail) {
    axios.delete(`${API_URL}/employee,${employee.id}`)
  }
}
