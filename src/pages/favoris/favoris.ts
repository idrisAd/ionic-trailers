import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({

  selector: 'page-login',
  templateUrl: 'favoris.html',
})
export class FavorisPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavorisPage');
  }

}

