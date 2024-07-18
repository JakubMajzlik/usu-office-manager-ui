import { Component, EventEmitter, Output } from '@angular/core';
import axios from 'axios';
import { API_URL } from '../api';
import { OfficeDetail } from '../../model/OfficeDetail';
import { OfficeService } from '../office.service';

@Component({
  selector: 'app-office-list',
  standalone: true,
  imports: [],
  templateUrl: './office-list.component.html',
  styleUrl: './office-list.component.scss'
})
export class OfficeListComponent {

  constructor(private officeService: OfficeService) {}

  @Output() selectedOfficeEvent = new EventEmitter<OfficeDetail>();

  selectOffice(office: OfficeDetail) {
    this.selectedOfficeEvent.emit(office)
  }

  getOffices() {
    return this.officeService.getAllOffices()
  }
}