import { Component, Input } from '@angular/core';
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

  @Input() allOffices: OfficeDetail[] = []

  officeToCreate: OfficeDetail = {
    id: 0,
    name: "",
    area: 0,
    tables: []
  }

  constructor(private officeService: OfficeService) { }

  createOffice() {
    const newOffice: OfficeDetail = {
      id: 0,
      area: this.officeToCreate.area,
      name: this.officeToCreate.name,
      tables: this.officeToCreate.tables
    }
    this.officeService.createOffice(this.officeToCreate).then((_) => {
      this.allOffices.push(newOffice)
    })
  }

}
