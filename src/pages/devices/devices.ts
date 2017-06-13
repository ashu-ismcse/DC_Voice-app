import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HTTP } from '@ionic-native/http';


@Component({
    selector : 'page-devices',
    templateUrl : 'devices.html',
})

export class DevicesPage{
    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
                private tts: TextToSpeech,private http: HTTP) {
    }

O100(){
  // let alert = this.alertCtrl.create({
  //   title: 'O found',
  //   subTitle: 'devices found',
  //   buttons: ['ok']
  // });
  //alert.present();
  this.tts.speak({text : 'Current Operator is 100. Now press start and say start to continue' , rate : 0.75});

  this.http.get('http://192.168.43.112:8000/', { params: { "value" : "100" } },{})
    .then(() => {})
  .catch(err =>{
    let alert = this.alertCtrl.create({
      title: err.status ,
      subTitle: 'devices found',
      buttons: ['ok']
    });
  })
  this.navCtrl.pop();
}

O101(){
  // let alert = this.alertCtrl.create({
  //   title: 'O found',
  //   subTitle: 'devices found',
  //   buttons: ['ok']
  // });
  //alert.present();
  this.tts.speak({text : 'Current Operator is 101. Now press start and say start to continue' , rate : 0.75});

  this.http.get('http://192.168.43.112:8000/', { params: { "value" : "101" } },{})
    .then(() => {})
  .catch(err =>{
    let alert = this.alertCtrl.create({
      title: err.status ,
      subTitle: 'devices found',
      buttons: ['ok']
    });
  })
  this.navCtrl.pop();
}

O102(){
  // let alert = this.alertCtrl.create({
  //   title: 'O found',
  //   subTitle: 'devices found',
  //   buttons: ['ok']
  // });
  //alert.present();
  this.tts.speak({text : 'Current Operator is 102. Now press start and say start to continue' , rate : 0.75});

  this.http.get('http://192.168.43.112:8000/', { params: { "value" : "102" } },{})
    .then(() => {})
  .catch(err =>{
    let alert = this.alertCtrl.create({
      title: err.status ,
      subTitle: 'devices found',
      buttons: ['ok']
    });
  })
  this.navCtrl.pop();
}

O103(){
  // let alert = this.alertCtrl.create({
  //   title: 'O found',
  //   subTitle: 'devices found',
  //   buttons: ['ok']
  // });
  //alert.present();
  this.tts.speak({text : 'Current Operator is 103.Now press start and say start to continue' , rate : 0.75});

  this.http.get('http://192.168.43.112:8000/', { params: { "value" : "103" } },{})
    .then(() => {})
  .catch(err =>{
    let alert = this.alertCtrl.create({
      title: err.status ,
      subTitle: 'devices found',
      buttons: ['ok']
    });
  })
  this.navCtrl.pop();
}

}