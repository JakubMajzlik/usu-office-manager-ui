import { HttpClient } from '@angular/common/http';
import { EnvironmentProviders, importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const HttpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/');

export function provideTranslate(): EnvironmentProviders {
  return makeEnvironmentProviders([
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
  ]);
}
