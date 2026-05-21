import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-legal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="page">
      <div class="container">
        <header class="page__head">
          <a routerLink="/" class="page__back">← {{ i18n.t('common.backHome') }}</a>
          <h1 class="page__title">{{ i18n.t('legal.title') }}</h1>
        </header>

        <section class="block">
          <h2>{{ i18n.t('legal.editor.title') }}</h2>
          <p>{{ i18n.t('legal.editor.body') }}</p>
        </section>

        <section class="block">
          <h2>{{ i18n.t('legal.host.title') }}</h2>
          <p>{{ i18n.t('legal.host.body') }}</p>
        </section>

        <section class="block">
          <h2>{{ i18n.t('legal.ip.title') }}</h2>
          <p>{{ i18n.t('legal.ip.body') }}</p>
        </section>

        <section class="block">
          <h2>{{ i18n.t('legal.law.title') }}</h2>
          <p>{{ i18n.t('legal.law.body') }}</p>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .page {
      padding: var(--space-16) 0 var(--space-24);
    }

    .page > .container {
      max-width: 780px;
    }

    .page__head {
      margin-bottom: var(--space-12);
    }

    .page__back {
      display: inline-block;
      font-size: var(--fs-sm);
      color: var(--color-text-muted);
      margin-bottom: var(--space-6);
    }

    .page__back:hover {
      color: var(--color-text);
    }

    .page__title {
      font-size: clamp(2.25rem, 5vw, 3.5rem);
      background: linear-gradient(135deg, #F8FAFC 0%, #C7D2FE 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .block {
      margin-bottom: var(--space-10);
    }

    .block h2 {
      font-size: var(--fs-xl);
      margin-bottom: var(--space-3);
    }

    .block p {
      font-size: var(--fs-base);
      line-height: 1.7;
      color: var(--color-text-muted);
      white-space: pre-line;
    }
  `],
})
export class LegalComponent {
  protected readonly i18n = inject(LanguageService);
}
