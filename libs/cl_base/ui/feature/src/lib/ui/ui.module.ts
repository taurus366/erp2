import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { SessionsModule } from './views/sessions/sessions.module';
import { UiComponent } from './ui.component';

// import { ErrorHandlerService } from './shared/services/error-handler.service';
// import { TokenInterceptor } from './shared/interceptors/token.interceptor';
// import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
// import { rootRouterConfig } from './app.routing';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    SessionsModule,
    UiComponent,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    // RouterModule.forRoot(rootRouterConfig),
  ],
  providers: [
    // { provide: ErrorHandler, useClass: ErrorHandlerService },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true,
    // },
  ],
})
export class AppModule {}
