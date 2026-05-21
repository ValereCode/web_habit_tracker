import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Obsession — Ta routine, ton empire',
  },
  {
    path: 'confidentialite',
    loadComponent: () =>
      import('./pages/privacy/privacy.component').then((m) => m.PrivacyComponent),
    title: 'Confidentialité — Obsession',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact — Obsession',
  },
  {
    path: 'mentions-legales',
    loadComponent: () =>
      import('./pages/legal/legal.component').then((m) => m.LegalComponent),
    title: 'Mentions légales — Obsession',
  },
  { path: '**', redirectTo: '' },
];
