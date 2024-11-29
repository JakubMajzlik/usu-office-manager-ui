import { Injectable } from '@angular/core';
import { OfficeDetail } from '../model/OfficeDetail';
import axios from 'axios';
import { API_URL } from './api';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {


  constructor() { }

  createOffice(officeDetail: OfficeDetail) {
    return axios.post(`${API_URL}/offices/`, officeDetail)
  }

  updateOffice(officeDetail: OfficeDetail) {
    axios.put(`${API_URL}/offices/${officeDetail.id}`, officeDetail)
  }

  deleteOffice(officeDetail: OfficeDetail) {
    return axios.delete(`${API_URL}/offices/${officeDetail.id}`)
  }

  getAllOffices() {
    return axios.get(`${API_URL}/offices/`)
  }
}
