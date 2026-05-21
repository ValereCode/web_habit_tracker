import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-badge-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="badge">
      <div class="badge__halo"></div>
      <div class="badge__emoji" aria-hidden="true">{{ emoji() }}</div>
      <div class="badge__label">{{ label() }}</div>
      <div class="badge__condition">{{ condition() }}</div>
    </div>
  `,
  styleUrl: './badge-showcase.component.css',
})
export class BadgeShowcaseComponent {
  readonly emoji = input.required<string>();
  readonly label = input.required<string>();
  readonly condition = input.required<string>();
}
