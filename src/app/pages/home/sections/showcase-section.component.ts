import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/i18n/language.service';
import { SectionHeadingComponent } from '../../../components/section-heading/section-heading.component';

const COLS = 28;
const ROWS = 7;
const PALETTE = ['#1E293B', '#064E3B', '#047857', '#059669', '#10B981'];

@Component({
  selector: 'app-showcase-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent],
  templateUrl: './showcase-section.component.html',
  styleUrl: './showcase-section.component.css',
})
export class ShowcaseSectionComponent {
  protected readonly i18n = inject(LanguageService);
  protected readonly heatColumns = this.generateHeat();

  protected cellColor(intensity: number): string {
    return PALETTE[intensity];
  }

  private generateHeat(): number[][] {
    const cols: number[][] = [];
    for (let c = 0; c < COLS; c++) {
      const col: number[] = [];
      for (let r = 0; r < ROWS; r++) {
        const seed = Math.sin(c * 12.9898 + r * 78.233) * 43758.5453;
        const noise = seed - Math.floor(seed);
        const recencyBoost = c / COLS;
        const value = Math.min(4, Math.floor((noise * 0.7 + recencyBoost * 0.5) * 5));
        col.push(Math.max(0, value));
      }
      cols.push(col);
    }
    return cols;
  }
}
