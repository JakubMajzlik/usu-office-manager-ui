import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { OfficeDetail, OfficeTableDetail } from '../../model/OfficeDetail';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-office-table-table',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './office-table-table.component.html',
  styleUrl: './office-table-table.component.scss'
})
export class OfficeTableTableComponent {


  @Input() office: OfficeDetail | null = null

  @Input() readOnly: Boolean = true

  selectedTable: OfficeTableDetail = {
    id: 0, name: "", utilizedArea: 0
  }

  getTablesForOffice(): OfficeTableDetail[] {
      return [
      ]
  }

  deleteTable(officeTable: OfficeTableDetail) {
    const index = this.office?.tables.indexOf(officeTable)
    if (index == undefined) return
    this.office?.tables.splice(index, 1)

  }

  setTableForEditing(officeTable: OfficeTableDetail) {
    this.selectedTable = {
      id: officeTable.id,
      name: officeTable.name,
      utilizedArea: officeTable.utilizedArea
    }
  }

  createNewTable() {
    if (this.office == null) return

    if (this.selectedTable.name.length == 0 || this.selectedTable.utilizedArea <= 0) return
    
    this.office.tables.push(this.selectedTable)

    this.selectedTable = {
      id: 0, name: "", utilizedArea: 0
    }
  }

}
