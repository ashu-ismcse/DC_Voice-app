import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial';
import { MediaPlugin, MediaObject } from '@ionic-native/media';
import { HTTP } from '@ionic-native/http';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import {DevicesPage} from '../devices/devices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // providers : [MediaObject]
})
export class HomePage {
   stop: any;

  constructor(public navCtrl: NavController,
    private bluetoothSerial: BluetoothSerial,
    private media: MediaPlugin,
    private http: HTTP,
    private transfer: Transfer,
    private tts: TextToSpeech) {

  }

  TurnOnBT() {
    //this.bluetoothSerial.enable().then((succ) =>{}).catch( e => alert("Error"));
    //this.bluetoothSerial.setDiscoverable(2000);
    this.navCtrl.push(DevicesPage);
  }

  RecordAndSend() {

    if(this.stop) {
      return;
    }

    const onStatusUpdate = (status) => console.log(status);
    const onSuccess = () => console.log('Action is successful.');
    const onError = (error) => console.error(error.message + "Recording Error");

    let file: MediaObject = this.media.create('myrec.wav' , onStatusUpdate , onSuccess , onError);
    file.startRecord();
    window.setTimeout(() => file.stopRecord(), 3000);


    setTimeout(() => {
        let fileTransfer: TransferObject = this.transfer.create();
        let fileURL = "/storage/emulated/0/myrec.wav"
        let ur = "http://192.168.43.112:8000/";
        let options : FileUploadOptions = {
          fileKey : "file",
          fileName : "file",
          mimeType : "audio/m4a",
          httpMethod : "POST",
          chunkedMode : false
        };

        var headers = {'headerParam':'headerValue','Connection':'close'};
        options.headers = headers;

        fileTransfer.upload(fileURL , ur , options).then((res) => {
            this.tts.speak({
              text : res.response,
              locale : 'en-US',
              rate : 1.0
            }).then(() => {
              setTimeout(() => this.RecordAndSend() , 500);
            }).catch(()=>{});
        }).catch(e => alert("Error"));
    } , 3500)

    // setTimeout(() => {this.RecordAndSend.sendserver();} , 4000);
  }

  startFun() {
    this.stop = 0;
    this.RecordAndSend();
  }

  stopFun() {
    this.stop = 1;
  }

}
