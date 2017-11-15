import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { FavorisPage } from "../pages/favoris/favoris";
import { PreferencesPage } from "../pages/preferences/preferences";
import { ApiServicesProvider } from "../providers/api-services/api-services";
import { TrailerServicesProvider } from "../providers/trailer-services/trailer-services";
import { HttpClientModule } from "@angular/common/http";
import { TrailerPage } from "../pages/trailer/trailer";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    FavorisPage,
    PreferencesPage,
    TrailerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    FavorisPage,
    PreferencesPage,
    TrailerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServicesProvider,
    TrailerServicesProvider
  ]
})
export class AppModule {}
