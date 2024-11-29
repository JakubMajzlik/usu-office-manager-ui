import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OfficeDetail } from '../../model/OfficeDetail';
import { OfficeService } from '../office.service';
import { TranslateModule } from '@ngx-translate/core';
import { OfficeTableTableComponent } from '../office-table-table/office-table-table.component';

@Component({
  selector: 'app-office-details',
  standalone: true,
  imports: [TranslateModule, OfficeTableTableComponent],
  templateUrl: './office-details.component.html',
  styleUrl: './office-details.component.scss'
})
export class OfficeDetailsComponent {

  constructor(private officeService: OfficeService) {}

  @Input() offices: OfficeDetail[] = []
  
  @Input() office: OfficeDetail | null = null;

  @Output() updateOfficeEvent = new EventEmitter<OfficeDetail>()

  updateOffice() {
    console.log(this.office)
    if (this.office != null) {
      this.updateOfficeEvent.emit(this.office)
    }
  }

  deleteOffice() {
    if (this.office != null) {
      this.officeService.deleteOffice(this.office).then(_ => {
        const index = this.offices.indexOf(this.office!)
        this.offices.splice(index, 1)
      })
    }
  }

}
