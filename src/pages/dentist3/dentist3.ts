import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Dentist3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dentist3',
  templateUrl: 'dentist3.html',
})
export class Dentist3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  signin(){
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      subTitle: 'Your appointment has been successfully made. A confirmation Email is sent to your account.',
      buttons: ['OK']
    });
    alert.present();
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Dentist3Page');
  }

}
