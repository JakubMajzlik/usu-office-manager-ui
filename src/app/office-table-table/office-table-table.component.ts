import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { OfficeDetail } from '../../model/OfficeDetail';
import { OfficeTableDetail } from '../../model/OfficeTableDetail';

@Component({
  selector: 'app-office-table-table',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './office-table-table.component.html',
  styleUrl: './office-table-table.component.scss'
})
export class OfficeTableTableComponent {


  @Input() office: OfficeDetail | null = null

  getTablesForOffice(): OfficeTableDetail[] {
    console.log("aa")
      return [
        {
          name: "Table A",
          utilizedArea: 5
        }
      ]
  }

}
