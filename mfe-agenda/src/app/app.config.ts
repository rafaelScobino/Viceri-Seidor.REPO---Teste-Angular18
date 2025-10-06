import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import  ptBr  from '@angular/common/locales/pt';
import { provideRouter } from '@angular/router';
import { AGENDA_ROUTES } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { registerLocaleData } from '@angular/common';
import { MessageService } from 'primeng/api';
registerLocaleData(ptBr)
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(AGENDA_ROUTES),
      provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        }),
          {provide:LOCALE_ID, useValue:'pt-BR'},
     MessageService
  ]
};
