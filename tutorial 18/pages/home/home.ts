import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	

  constructor(public navCtrl: NavController,private musicProvider: MusicsProvider) {
  	this.musicProvider.getMusic()
  		.subscribe(musicList => console.log(musicList));

  }
  

}
