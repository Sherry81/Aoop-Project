import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { DoctypePage } from '../pages/doctype/doctype';
import { DoctorsPage } from '../pages/doctors/doctors';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';
import { DentistsPage } from '../pages/dentists/dentists';
import { PsychoPage } from '../pages/psycho/psycho';
import { Cardio1Page } from '../pages/cardio1/cardio1';
import { Cardio2Page } from '../pages/cardio2/cardio2';
import { Cardio3Page } from '../pages/cardio3/cardio3';
import { Dentist1Page } from '../pages/dentist1/dentist1';
import { Dentist2Page } from '../pages/dentist2/dentist2';
import { Dentist3Page } from '../pages/dentist3/dentist3';
import { Psycho1Page }  from '../pages/psycho1/psycho1';
import { Psycho2Page }  from '../pages/psycho2/psycho2';
import { Psycho3Page }  from '../pages/psycho3/psycho3';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    DoctypePage,
    DoctorsPage,
    RegisterPage,
    WelcomePage,
    DentistsPage,
    PsychoPage,
    Cardio1Page,
    Cardio2Page,
    Cardio3Page,
    Dentist1Page,
    Dentist2Page,
    Dentist3Page,
    Psycho1Page,
    Psycho2Page,
    Psycho3Page,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    DoctypePage,
    DoctorsPage,
    RegisterPage,
    WelcomePage,
    DentistsPage,
    PsychoPage,
    Cardio1Page,
    Cardio2Page,
    Cardio3Page,
    Dentist1Page,
    Dentist2Page,
    Dentist3Page,
    Psycho1Page,
    Psycho2Page,
    Psycho3Page,
  ],  
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
