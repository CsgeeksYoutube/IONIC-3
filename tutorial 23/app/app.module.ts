import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SocialSharing} from "@ionic-native/social-sharing";
import {MusicPlayerPage} from "../pages/music-player/music-player";
import { StatusBar } from '@ionic-native/status-bar';
import { Media} from '@ionic-native/media';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MusicsProvider } from '../providers/musics/musics';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MusicPlayerPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MusicPlayerPage
  ],
  providers: [
    Media,
    SocialSharing,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicsProvider
    
    
  ]
})
export class AppModule {}
