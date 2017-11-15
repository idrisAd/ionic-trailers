import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { Movie } from "../../models/movie";
import { TrailerServicesProvider } from "../../providers/trailer-services/trailer-services";
import * as _ from 'lodash';
import {TrailerPage} from "../trailer/trailer";

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: Array<Movie> = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public trailerServices: TrailerServicesProvider) {
  }

  ionViewDidLoad(){
    this.trailerServices.getList()
      .then((list)=>this.createTheMovies(list))
      .catch(e => console.error(e))
  }

  createTheMovies(list){
    this.movies= list.map((item)=> {
      return new Movie(item.title,
        item.releasedate,
        item.studio,
        item.poster,
        item.location,
        item.rating,
        item.genre,
        item.directors,
        item.actors,
        item.trailers)
    });

    this.movies=_.orderBy(this.movies,'title','asc');

    console.log(this.movies)
  }

  goToTrailer(trailer){
    console.log(trailer);
    this.navCtrl.push(TrailerPage, {'trailer': trailer} );
  }

}
