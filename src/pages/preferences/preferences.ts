import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({

  selector: 'page-login',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencePage');
  }

}

