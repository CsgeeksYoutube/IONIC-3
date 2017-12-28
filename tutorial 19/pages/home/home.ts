import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public allMusic =[];

  constructor(public navCtrl: NavController,private musicProvider: MusicsProvider) {
  	

  }
  ionViewDidLoad(){
  	this.musicProvider.getMusic()
  		.subscribe(musicList => this.allMusic= musicList);
  }
  

}
