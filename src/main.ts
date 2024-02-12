/* ••[1]••••••••••••••••••••••••• main.ts •••••••••••••••••••••••••••••• */

import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err: unknown): void => console.error(err));
