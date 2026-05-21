import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/i18n/language.service';
import { SectionHeadingComponent } from '../../../components/section-heading/section-heading.component';
import { FeatureCardComponent } from '../../../components/feature-card/feature-card.component';

@Component({
  selector: 'app-features-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, FeatureCardComponent],
  template: `
    <section class="section" id="features">
      <div class="container">
        <app-section-heading
          [eyebrow]="i18n.t('home.features.eyebrow')"
          [title]="i18n.t('home.features.title')"
          [lede]="i18n.t('home.features.lede')"
        />

        <div class="grid">
          <app-feature-card
            icon="◎"
            [title]="i18n.t('home.features.today.title')"
            [description]="i18n.t('home.features.today.desc')"
            iconBg="linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
          />
          <app-feature-card
            icon="▦"
            [title]="i18n.t('home.features.stats.title')"
            [description]="i18n.t('home.features.stats.desc')"
            iconBg="linear-gradient(135deg, #10B981 0%, #059669 100%)"
          />
          <app-feature-card
            icon="✦"
            [title]="i18n.t('home.features.gamification.title')"
            [description]="i18n.t('home.features.gamification.desc')"
            iconBg="linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)"
          />
          <app-feature-card
            icon="◐"
            [title]="i18n.t('home.features.reminders.title')"
            [description]="i18n.t('home.features.reminders.desc')"
            iconBg="linear-gradient(135deg, #EC4899 0%, #BE185D 100%)"
          />
          <app-feature-card
            icon="◈"
            [title]="i18n.t('home.features.customization.title')"
            [description]="i18n.t('home.features.customization.desc')"
            iconBg="linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)"
          />
          <app-feature-card
            icon="◯"
            [title]="i18n.t('home.features.multilang.title')"
            [description]="i18n.t('home.features.multilang.desc')"
            iconBg="linear-gradient(135deg, #84CC16 0%, #4D7C0F 100%)"
          />
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-6);
    }

    @media (max-width: 960px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class FeaturesSectionComponent {
  protected readonly i18n = inject(LanguageService);
}
