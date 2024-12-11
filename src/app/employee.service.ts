import { Injectable } from '@angular/core';
import { EmployeeDetail } from '../model/EmployeeDetail';
import axios from 'axios';
import { API_URL } from './api';
import { OfficeTableDetail } from '../model/OfficeDetail';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return axios.get(`${API_URL}/employees/`)

  }

  createNewEmployee(newEmployee: EmployeeDetail) {
    return axios.post(`${API_URL}/employees/`, newEmployee)
  }

  updateEmployee(updatedEmployee: EmployeeDetail) {
    axios.put(`${API_URL}/employees/${updatedEmployee.id}`, updatedEmployee)
  }

  deleteEmployee(employee: EmployeeDetail) {
    return axios.delete(`${API_URL}/employees/${employee.id}`)
  }

  attachToTable(employee: EmployeeDetail, table: OfficeTableDetail) {
    axios.patch(`${API_URL}/employees/${employee.id}/attachToTable/${table.id}`)
  }
}
