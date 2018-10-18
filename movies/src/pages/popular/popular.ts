import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {
  filmes: Observable<any>;
  api_key = "9c2c75d9d67c3f98cc98bb29450115c5";
  url_popular = "https://api.themoviedb.org/3/movie/popular?&" +
    "api_key=" + this.api_key;
  url_images = "https://image.tmdb.org/t/p/original";
  url_images_w300 = "https://image.tmdb.org/t/p/w200";

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.filmes = this.httpClient.get(this.url_popular);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }

}
