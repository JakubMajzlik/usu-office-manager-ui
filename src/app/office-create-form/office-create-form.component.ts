import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { OfficeDetail } from '../../model/OfficeDetail';
import { OfficeService } from '../office.service';
import { FormsModule } from '@angular/forms';
import { OfficeTableTableComponent } from '../office-table-table/office-table-table.component';

@Component({
  selector: 'app-office-create-form',
  standalone: true,
  imports: [TranslateModule, FormsModule, OfficeTableTableComponent],
  templateUrl: './office-create-form.component.html',
  styleUrl: './office-create-form.component.scss'
})
export class OfficeCreateFormComponent {


  office: OfficeDetail = {
    id: 0,
    name: "",
    area: 0,
    tables: []
  }

  constructor(private officeService: OfficeService) { }

  createOffice() {
    this.officeService.createOffice(this.office)
  }

}
