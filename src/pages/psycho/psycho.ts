import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Psycho1Page } from '../psycho1/psycho1';
import { Psycho2Page } from '../psycho2/psycho2';
import { Psycho3Page } from '../psycho3/psycho3';

/**
 * Generated class for the PsychoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-psycho',
  templateUrl: 'psycho.html',
})
export class PsychoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
doc1(){
  this.navCtrl.push(Psycho1Page)
}
doc2(){
  this.navCtrl.push(Psycho2Page)
}
doc3(){
  this.navCtrl.push(Psycho3Page)
} 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PsychoPage');
  }

}
