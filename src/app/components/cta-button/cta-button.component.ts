import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type CtaVariant = 'primary' | 'ghost' | 'subtle';

@Component({
  selector: 'app-cta-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      [href]="href()"
      [attr.aria-label]="ariaLabel() || label()"
      class="cta cta--{{ variant() }}"
    >
      @if (icon(); as i) {
        <span class="cta__icon" aria-hidden="true">{{ i }}</span>
      }
      <span class="cta__label">{{ label() }}</span>
      @if (subLabel(); as s) {
        <span class="cta__sub">{{ s }}</span>
      }
    </a>
  `,
  styleUrl: './cta-button.component.css',
})
export class CtaButtonComponent {
  readonly label = input.required<string>();
  readonly href = input<string>('#');
  readonly variant = input<CtaVariant>('primary');
  readonly icon = input<string | null>(null);
  readonly subLabel = input<string | null>(null);
  readonly ariaLabel = input<string | null>(null);
}
