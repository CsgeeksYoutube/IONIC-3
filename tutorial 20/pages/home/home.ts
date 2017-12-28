import { Component } from '@angular/core';
import { NavController ,LoadingController} from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public allMusic =[];

  constructor(public navCtrl: NavController,
  	public loadingController:LoadingController,
  	private musicProvider: MusicsProvider) {
  	

  }
  ionViewDidLoad(){
  	let allMusicLoadingController = this.loadingController.create({
  		content: "getting your songs from server"
  	});
  	allMusicLoadingController.present();

  	this.musicProvider.getMusic()
  		.subscribe((musicList) => 

  			{
  			allMusicLoadingController.dismiss();
  			this.allMusic= musicList
  		});
  }
  

}
