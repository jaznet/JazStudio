import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { WelcomeComponent } from '../regions/welcome/welcome/welcome.component';
import { JzButtonsModule } from '../library/jz-ui-controls/jz-buttons/jz-buttons.module';
import { WelcomeModule } from '../regions/welcome/welcome.module';
import { AppRouterModule } from './app-router/app-router.module';
import { LoginModule } from './app-login/login.module';
import { AppPartsModule } from './app-parts/app-parts.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    AppPartsModule,
    JzButtonsModule,
    LoginModule,
    WelcomeModule,
    RouterModule,
    AppRouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
