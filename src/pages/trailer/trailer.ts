import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { Movie } from "../../models/movie";


@IonicPage()
@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html',
})


export class TrailerPage{

  trailer?: Movie;

  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.trailer = this.navParams.get('trailer');
  }

  ionViewDidLoad(){

  }
}
