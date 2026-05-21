import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/i18n/language.service';
import { CtaButtonComponent } from '../../../components/cta-button/cta-button.component';

@Component({
  selector: 'app-final-cta-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CtaButtonComponent],
  template: `
    <section class="section finalCta">
      <div class="container">
        <div class="card">
          <div class="card__glow" aria-hidden="true"></div>
          <h2 class="card__title">{{ i18n.t('home.finalCta.title') }}</h2>
          <p class="card__lede">{{ i18n.t('home.finalCta.lede') }}</p>

          <div class="card__ctas">
            <app-cta-button
              [label]="i18n.t('common.download.ios')"
              [subLabel]="i18n.t('common.download.comingSoon')"
              icon="🍎"
              variant="primary"
            />
            <app-cta-button
              [label]="i18n.t('common.download.android')"
              [subLabel]="i18n.t('common.download.comingSoon')"
              icon="▶"
              variant="ghost"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .card {
      position: relative;
      padding: var(--space-16) var(--space-8);
      text-align: center;
      background: linear-gradient(160deg, var(--color-surface) 0%, var(--color-bg-elevated) 100%);
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-xl);
      overflow: hidden;
      isolation: isolate;
    }

    .card__glow {
      position: absolute;
      inset: -50% -20% auto -20%;
      height: 600px;
      background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.35) 0%, transparent 60%);
      filter: blur(60px);
      z-index: -1;
    }

    .card__title {
      font-size: clamp(2.25rem, 5vw, 4rem);
      background: linear-gradient(135deg, #F8FAFC 0%, #C7D2FE 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: var(--space-5);
    }

    .card__lede {
      font-size: var(--fs-lg);
      color: var(--color-text-muted);
      max-width: 540px;
      margin: 0 auto var(--space-10);
    }

    .card__ctas {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-4);
    }

    @media (max-width: 640px) {
      .card {
        padding: var(--space-12) var(--space-6);
      }
    }
  `],
})
export class FinalCtaSectionComponent {
  protected readonly i18n = inject(LanguageService);
}
