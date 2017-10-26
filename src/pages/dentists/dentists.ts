import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dentist1Page } from '../dentist1/dentist1';
import { Dentist2Page } from '../dentist2/dentist2';
import { Dentist3Page } from '../dentist3/dentist3';


/**
 * Generated class for the DentistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dentists',
  templateUrl: 'dentists.html',
})
export class DentistsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
doc1(){
  this.navCtrl.push(Dentist1Page)
}
doc2(){
  this.navCtrl.push(Dentist2Page)
}
doc3(){
  this.navCtrl.push(Dentist3Page)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DentistsPage');
  }

}
