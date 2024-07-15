import { Component, Input } from '@angular/core';
import { EmployeeDetail } from '../../model/EmployeeDetail';

@Component({
  selector: 'app-employee-update-form',
  standalone: true,
  imports: [],
  templateUrl: './employee-update-form.component.html',
  styleUrl: './employee-update-form.component.scss'
})
export class EmployeeUpdateFormComponent {

  @Input() employee: EmployeeDetail | null = null

  
}
