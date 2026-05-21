import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/i18n/language.service';
import { CtaButtonComponent } from '../../../components/cta-button/cta-button.component';
import { PhoneMockupComponent } from '../../../components/phone-mockup/phone-mockup.component';

@Component({
  selector: 'app-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CtaButtonComponent, PhoneMockupComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  protected readonly i18n = inject(LanguageService);
}
