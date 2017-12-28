import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicPlayerPage } from './music-player';

@NgModule({
  declarations: [
    MusicPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicPlayerPage),
  ],
})
export class MusicPlayerPageModule {}
