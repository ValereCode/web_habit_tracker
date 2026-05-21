import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-phone-mockup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mockup">
      <div class="mockup__glow"></div>
      <div class="mockup__frame">
        <div class="mockup__notch"></div>
        <div class="mockup__screen">
          <ng-content />
        </div>
      </div>
    </div>
  `,
  styleUrl: './phone-mockup.component.css',
})
export class PhoneMockupComponent {}
