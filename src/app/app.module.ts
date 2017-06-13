import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { MediaPlugin, MediaObject } from '@ionic-native/media';
// import { File } from '@ionic-native/file';
import { HTTP } from '@ionic-native/http';
import { Transfer,TransferObject } from '@ionic-native/transfer';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DevicesPage} from '../pages/devices/devices';
import { SlidePage } from "../pages/slide/slide";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DevicesPage,
    SlidePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DevicesPage,
    SlidePage
  ],
  providers: [
    StatusBar,
    BluetoothSerial,
    SplashScreen,
    MediaPlugin,
    HTTP,
    Transfer,
    TransferObject,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
