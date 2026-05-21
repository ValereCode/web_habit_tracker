import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { HeroSectionComponent } from './sections/hero-section.component';
import { FeaturesSectionComponent } from './sections/features-section.component';
import { GamificationSectionComponent } from './sections/gamification-section.component';
import { ShowcaseSectionComponent } from './sections/showcase-section.component';
import { LanguagesSectionComponent } from './sections/languages-section.component';
import { FinalCtaSectionComponent } from './sections/final-cta-section.component';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    HeroSectionComponent,
    FeaturesSectionComponent,
    GamificationSectionComponent,
    ShowcaseSectionComponent,
    LanguagesSectionComponent,
    FinalCtaSectionComponent,
  ],
  template: `
    <app-hero-section />
    <app-features-section />

    <section class="section section--tight">
      <div class="container">
        <a routerLink="/confidentialite" class="privacyBanner">
          <span class="privacyBanner__icon" aria-hidden="true">🛡</span>
          <div class="privacyBanner__text">
            <strong>{{ i18n.t('home.privacyBanner.title') }}</strong>
            <span>{{ i18n.t('home.privacyBanner.desc') }}</span>
          </div>
          <span class="privacyBanner__cta">{{ i18n.t('home.privacyBanner.cta') }} →</span>
        </a>
      </div>
    </section>

    <app-gamification-section />
    <app-showcase-section />
    <app-languages-section />
    <app-final-cta-section />
  `,
  styles: [`
    .privacyBanner {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: var(--space-6);
      padding: var(--space-6) var(--space-8);
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%);
      border: 1px solid rgba(16, 185, 129, 0.25);
      border-radius: var(--radius-lg);
      transition: transform var(--duration-base) var(--ease-out),
                  border-color var(--duration-base) var(--ease-out);
    }

    .privacyBanner:hover {
      transform: translateY(-2px);
      border-color: rgba(16, 185, 129, 0.5);
    }

    .privacyBanner__icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(16, 185, 129, 0.15);
      border-radius: var(--radius-md);
      font-size: 1.5rem;
    }

    .privacyBanner__text {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .privacyBanner__text strong {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: var(--fs-lg);
      letter-spacing: -0.02em;
      color: var(--color-text);
    }

    .privacyBanner__text span {
      font-size: var(--fs-sm);
      color: var(--color-text-muted);
    }

    .privacyBanner__cta {
      font-size: var(--fs-sm);
      font-weight: 600;
      color: var(--color-emerald);
      white-space: nowrap;
    }

    @media (max-width: 720px) {
      .privacyBanner {
        grid-template-columns: auto 1fr;
      }

      .privacyBanner__cta {
        grid-column: 1 / -1;
        margin-top: var(--space-2);
      }
    }
  `],
})
export class HomeComponent {
  protected readonly i18n = inject(LanguageService);
}
