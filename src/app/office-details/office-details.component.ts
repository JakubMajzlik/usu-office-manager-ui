import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OfficeDetail } from '../../model/OfficeDetail';
import { OfficeService } from '../office.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-office-details',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './office-details.component.html',
  styleUrl: './office-details.component.scss'
})
export class OfficeDetailsComponent {

  constructor(private employeeService: OfficeService) {}

  
  @Input() office: OfficeDetail | null = null;

  @Output() updateOfficeEvent = new EventEmitter<OfficeDetail>()

  setEmployee(office: OfficeDetail) {
    this.office = office;
  }

  updateOffice() {
    if (this.office != null) {
      this.updateOfficeEvent.emit(this.office)
    }
  }

  deleteOffice() {
    if (this.office != null) {
      this.employeeService.deleteOffice(this.office)
    }
  }

}
