import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cardio1Page } from '../cardio1/cardio1';
import { Cardio2Page } from '../cardio2/cardio2';
import { Cardio3Page } from '../cardio3/cardio3';

/**
 * Generated class for the DoctorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctors',
  templateUrl: 'doctors.html',
})
export class DoctorsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
doc1(){
  this.navCtrl.push(Cardio1Page)
}
doc2(){
  this.navCtrl.push(Cardio2Page)
}
doc3(){
  this.navCtrl.push(Cardio3Page)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorsPage');
  }

}
