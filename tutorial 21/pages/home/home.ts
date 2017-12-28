import { Component } from '@angular/core';
import { NavController ,LoadingController,ActionSheetController} from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public allMusic =[];

  constructor(public navCtrl: NavController,
  	private actionSheetController: ActionSheetController,
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
  shareSong(){
  	let shareSongActionSheet = this.actionSheetController.create({
  		title:"Share song",
  		buttons:[
  		{
  			text:"Share on Facebook",
  			icon:"logo-facebook"
  		},
  		{
  			text:"Twitter",
  			icon:"logo-twitter"
  		},
  		{
  			text:"Share",
  			icon:"share"
  		},
  		{
  			text:"Cancel",
  			role:"destructive"
  		}

  		]
  	});
  	shareSongActionSheet.present();
  }
  

}
