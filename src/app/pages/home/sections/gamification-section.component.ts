import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/i18n/language.service';
import { SectionHeadingComponent } from '../../../components/section-heading/section-heading.component';
import { BadgeShowcaseComponent } from '../../../components/badge-showcase/badge-showcase.component';

@Component({
  selector: 'app-gamification-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, BadgeShowcaseComponent],
  templateUrl: './gamification-section.component.html',
  styleUrl: './gamification-section.component.css',
})
export class GamificationSectionComponent {
  protected readonly i18n = inject(LanguageService);
}
