import {Component} from '@angular/core';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';

@Component({
    selector : 'page-slide',
    templateUrl : 'slide.html'
})

export class SlidePage{
    constructor(private navCtrl : NavController) {

    }

    Start() {
        this.navCtrl.push(HomePage);
    }
}