import { bootstrap }    from '@angular/platform-browser-dynamic';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

enableProdMode();
bootstrap(AppComponent, [
  appRouterProviders, HTTP_PROVIDERS,
  {
    provide: TranslateLoader,
    useFactory: (http: Http) => new TranslateStaticLoader(http, 'i18n', '.json'),
    deps: [Http]
  },
  // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
  TranslateService
])
.catch(err => console.error(err));
