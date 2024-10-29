import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private translateService: TranslateService) {}

  @Output() changePage = new EventEmitter<string>()

  redirect(page: string) {
    this.changePage.emit(page)
  }

  changeLanguage(languageChangeEvent: Event) {
    var selectedLanguage = (languageChangeEvent.target as HTMLInputElement).value
    this.translateService.use(selectedLanguage)
  }
}
