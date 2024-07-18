import { Component, Input } from '@angular/core';
import { OfficeDetail } from '../../model/OfficeDetail';

@Component({
  selector: 'app-office-update-form',
  standalone: true,
  imports: [],
  templateUrl: './office-update-form.component.html',
  styleUrl: './office-update-form.component.scss'
})
export class OfficeUpdateFormComponent {

  @Input() office: OfficeDetail | null = null

}
