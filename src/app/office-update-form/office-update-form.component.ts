import { Component, Input } from '@angular/core';
import { OfficeDetail } from '../../model/OfficeDetail';
import { TranslateModule } from '@ngx-translate/core';
import { OfficeTableTableComponent } from "../office-table-table/office-table-table.component";

@Component({
  selector: 'app-office-update-form',
  standalone: true,
  imports: [TranslateModule, OfficeUpdateFormComponent, OfficeTableTableComponent],
  templateUrl: './office-update-form.component.html',
  styleUrl: './office-update-form.component.scss'
})
export class OfficeUpdateFormComponent {

  @Input() office: OfficeDetail | null = null

}
