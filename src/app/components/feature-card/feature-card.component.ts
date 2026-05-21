import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="card">
      <div class="card__icon" [style.background]="iconBg()">
        <span aria-hidden="true">{{ icon() }}</span>
      </div>
      <h3 class="card__title">{{ title() }}</h3>
      <p class="card__desc">{{ description() }}</p>
    </article>
  `,
  styleUrl: './feature-card.component.css',
})
export class FeatureCardComponent {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly iconBg = input<string>('linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)');
}
