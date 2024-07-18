import { Injectable } from '@angular/core';
import { OfficeDetail } from '../model/OfficeDetail';
import axios from 'axios';
import { API_URL } from './api';

const mockOfficesJson = `
[
  {
    "id": 1,
    "name": "Office A",
    "area": 10,
    "capacity": 3,
    "tables": [
      {
        "id": 1,
        "name": "Table A1",
        "utilizedArea": 2
      },
      {
        "id": 2,
        "name": "Table A2",
        "utilizedArea": 2
      }
    ]
  },
  {
    "id": 2,
    "name": "Office B",
    "area": 20,
    "capacity": 5,
    "tables": [
      {
        "id": 3,
        "name": "Table B1",
        "utilizedArea": 2
      },
      {
        "id": 4,
        "name": "Table B2",
        "utilizedArea": 2
      }
    ]
  }
]
`

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

officeList = JSON.parse(mockOfficesJson) as OfficeDetail[] 

  constructor() { }

  createOffice(officeDetail: OfficeDetail) {
    axios.post(`${API_URL}/office`)
  }

  updateOffice(officeDetail: OfficeDetail) {
    axios.put(`${API_URL}/office/${officeDetail.id}`)
  }

  deleteOffice(officeDetail: OfficeDetail) {
    axios.delete(`${API_URL}/office/${officeDetail.id}`)
  }

  getAllOffices() {
    return this.officeList
    // return axios.get(`${API_URL}/office`)
  }
}
