import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-language-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="toggle" role="group" aria-label="Language">
      <button
        type="button"
        class="toggle__btn"
        [class.toggle__btn--active]="i18n.lang() === 'fr'"
        (click)="i18n.setLang('fr')"
        aria-label="Français"
      >FR</button>
      <button
        type="button"
        class="toggle__btn"
        [class.toggle__btn--active]="i18n.lang() === 'en'"
        (click)="i18n.setLang('en')"
        aria-label="English"
      >EN</button>
    </div>
  `,
  styleUrl: './language-toggle.component.css',
})
export class LanguageToggleComponent {
  protected readonly i18n = inject(LanguageService);
}
