import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { OfficeDetail } from '../../model/OfficeDetail';

@Component({
  selector: 'app-office-table-table',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './office-table-table.component.html',
  styleUrl: './office-table-table.component.scss'
})
export class OfficeTableTableComponent {


  @Input() office: OfficeDetail | null = null

  getTablesForOffice() {
      return []
  }

}
