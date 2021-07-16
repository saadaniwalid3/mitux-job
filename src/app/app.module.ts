import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginCandidateComponent } from './login-candidate/login-candidate.component';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { BasicAuthHttpInterceptorService } from './_services/basic-auth-http-interceptor.service';
import { InfoPersoComponent } from './info-perso/info-perso.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EtudesComponent } from './etudes/etudes.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    LoginCandidateComponent,
    LoginCompanyComponent,
    InfoPersoComponent,
    NavigationComponent,
    EtudesComponent,
    ProfessionnelComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'logincandidate', component: LoginCandidateComponent },
      { path: 'logincompany', component: LoginCompanyComponent },
      { path: 'user', component: UserComponent, 
        children: [
          {
            path: 'info-perso',
            component: InfoPersoComponent
          },
          {
            path: 'etudes',
            component: EtudesComponent,
          },
          {
            path: 'professionnal',
            component: ProfessionnelComponent,
          }
        ]
      },
      {
        path: 'user', component: UserComponent, outlet: 'infos',
        children: [
          {
            path: 'info-perso',
            component: InfoPersoComponent
          },
          {
            path: 'etudes',
            component: EtudesComponent
          },
          {
            path: 'professionnel',
            component: ProfessionnelComponent
          }
        ]
      },

      { path: 'info-perso', component: InfoPersoComponent, outlet: 'infos' },
      { path: 'etudes', component: EtudesComponent, outlet: 'infos' },
      { path: 'professionnel', component: ProfessionnelComponent }
      //, canActivate: [AuthGuard]  }
    ]),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
