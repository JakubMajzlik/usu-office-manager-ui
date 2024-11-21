import { Component, Input } from '@angular/core';
import { OfficeListComponent } from '../office-list/office-list.component';
import { OfficeDetailsComponent } from '../office-details/office-details.component';
import { OfficeCreateFormComponent } from '../office-create-form/office-create-form.component';
import { OfficeUpdateFormComponent } from '../office-update-form/office-update-form.component';
import { OfficeDetail } from '../../model/OfficeDetail';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-office-container',
  standalone: true,
  imports: [OfficeListComponent, OfficeDetailsComponent, OfficeCreateFormComponent, OfficeUpdateFormComponent, TranslateModule],
  templateUrl: './office-container.component.html',
  styleUrl: './office-container.component.scss'
})
export class OfficeContainerComponent {
  showDetail: boolean = false

  showCreateForm: boolean = false

  showEditForm: boolean = false

  selectedOffice: OfficeDetail | null = null;

  @Input() offices: OfficeDetail[] = []

  private hideAll() {
    this.showDetail = false
    this.showCreateForm = false
    this.showEditForm = false
  }

  showOfficeDetails(employee: OfficeDetail) {
    this.hideAll()
    this.selectedOffice = employee
    this.showDetail = true
  }

  showCreateOfficeForm() {
    this.hideAll()
    this.showCreateForm = true
  }

  showUpdateOfficeForm() {
    this.hideAll()
    this.showEditForm = true
  }
}
