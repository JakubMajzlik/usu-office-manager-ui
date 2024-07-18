import { Injectable } from '@angular/core';
import { EmployeeDetail } from '../model/EmployeeDetail';
import axios from 'axios';
import { API_URL } from './api';

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

  constructor() { }

  getEmployees() {
  let employees: EmployeeDetail[] = []
    axios.get(`${API_URL}/employee`).then((response) => {
      employees = JSON.parse(response.data) as EmployeeDetail[]
    })
    return employees
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