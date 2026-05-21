import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="heading" [class.heading--center]="centered()">
      <span class="heading__eyebrow">{{ eyebrow() }}</span>
      <h2 class="heading__title">{{ title() }}</h2>
      @if (lede(); as l) {
        <p class="heading__lede">{{ l }}</p>
      }
    </div>
  `,
  styleUrl: './section-heading.component.css',
})
export class SectionHeadingComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly lede = input<string | null>(null);
  readonly centered = input<boolean>(true);
}
