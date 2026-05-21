import { Injectable, computed, signal } from '@angular/core';
import { Lang, translations } from './translations';
import { TranslationKey } from './translation-keys';

const STORAGE_KEY = 'obsession.lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _lang = signal<Lang>(this.readInitial());
  readonly lang = this._lang.asReadonly();
  readonly dict = computed(() => translations[this._lang()]);

  constructor() {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this._lang();
    }
  }

  setLang(lang: Lang): void {
    this._lang.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  t(key: TranslationKey): string {
    return this.dict()[key];
  }

  private readInitial(): Lang {
    if (typeof localStorage === 'undefined') {
      return 'fr';
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'fr';
  }
}
