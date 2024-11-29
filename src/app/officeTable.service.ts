import { Injectable } from '@angular/core';
import { EmployeeDetail } from '../model/EmployeeDetail';
import axios from 'axios';
import { API_URL } from './api';
import { OfficeTableDetail } from '../model/OfficeDetail';


@Injectable({
  providedIn: 'root'
})
export class OfficeTableService {

  constructor() { }

  getOfficeTables() {
    return axios.get(`${API_URL}/tables/`)
  }


  getOfficeTable(id: number) {
    return axios.get(`${API_URL}/tables/${id}`)
  }

  createOfficeTable(table: OfficeTableDetail) {
    return axios.post(`${API_URL}/tables/`, table)
  }
}
