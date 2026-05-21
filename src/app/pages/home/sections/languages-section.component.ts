import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/i18n/language.service';
import { SectionHeadingComponent } from '../../../components/section-heading/section-heading.component';

interface LangPill {
  flag: string;
  name: string;
}

const LANGUAGES: LangPill[] = [
  { flag: '🇫🇷', name: 'Français' },
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇪🇸', name: 'Español' },
  { flag: '🇩🇪', name: 'Deutsch' },
  { flag: '🇮🇹', name: 'Italiano' },
  { flag: '🇵🇹', name: 'Português' },
  { flag: '🇳🇱', name: 'Nederlands' },
  { flag: '🇵🇱', name: 'Polski' },
  { flag: '🇷🇺', name: 'Русский' },
  { flag: '🇹🇷', name: 'Türkçe' },
  { flag: '🇯🇵', name: '日本語' },
  { flag: '🇰🇷', name: '한국어' },
  { flag: '🇨🇳', name: '中文' },
  { flag: '🇮🇳', name: 'हिन्दी' },
  { flag: '🇸🇦', name: 'العربية' },
];

@Component({
  selector: 'app-languages-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent],
  template: `
    <section class="section" id="languages">
      <div class="container">
        <app-section-heading
          [eyebrow]="i18n.t('home.languages.eyebrow')"
          [title]="i18n.t('home.languages.title')"
          [lede]="i18n.t('home.languages.lede')"
        />
        <ul class="pills">
          @for (lang of languages; track lang.name) {
            <li class="pill">
              <span class="pill__flag" aria-hidden="true">{{ lang.flag }}</span>
              <span class="pill__name">{{ lang.name }}</span>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: [`
    .pills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-3);
      padding: 0;
      margin: 0;
      list-style: none;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: 10px 18px;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-pill);
      font-size: var(--fs-sm);
      font-weight: 500;
      transition: transform var(--duration-fast) var(--ease-out),
                  border-color var(--duration-fast) var(--ease-out),
                  background var(--duration-fast) var(--ease-out);
    }

    .pill:hover {
      transform: translateY(-2px);
      border-color: var(--color-primary-soft);
      background: var(--color-surface-2);
    }

    .pill__flag {
      font-size: 1.15rem;
      line-height: 1;
    }
  `],
})
export class LanguagesSectionComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly languages = LANGUAGES;
}
