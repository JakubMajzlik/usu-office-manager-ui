import { Component, Input } from '@angular/core';
import { OfficeDetail } from '../../model/OfficeDetail';
import { TranslateModule } from '@ngx-translate/core';
import { OfficeTableTableComponent } from "../office-table-table/office-table-table.component";
import { FormsModule } from '@angular/forms';
import { OfficeService } from '../office.service';

@Component({
  selector: 'app-office-update-form',
  standalone: true,
  imports: [TranslateModule, FormsModule, OfficeTableTableComponent],
  templateUrl: './office-update-form.component.html',
  styleUrl: './office-update-form.component.scss'
})
export class OfficeUpdateFormComponent {

  @Input() office: OfficeDetail | null = null

  constructor(private officeService: OfficeService){}

  updateOffice() {
    if (this.office == null) return
    this.officeService.updateOffice(this.office)
  }

}
