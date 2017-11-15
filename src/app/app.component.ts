import { Component, ViewChild } from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { FavorisPage } from "../pages/favoris/favoris";
import { PreferencesPage } from "../pages/preferences/preferences";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild ('mycontent') navCtrl: NavController;
  @ViewChild('menu') menuCtrl: MenuController;
  rootPage:any = HomePage;

  //loginPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToHome(){
    this.navCtrl.push(HomePage);
    this.menuCtrl.close();
  }

  goToLog(){
    this.navCtrl.push(LoginPage);
    this.menuCtrl.close();
  }

  goToFavoris(){
    this.navCtrl.push(FavorisPage);
    this.menuCtrl.close();
  }

  goToSetting(){
    this.navCtrl.push(PreferencesPage);
    this.menuCtrl.close();
  }

}

