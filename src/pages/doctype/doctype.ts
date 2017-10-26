import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorsPage } from '../doctors/doctors';
import { DentistsPage } from '../dentists/dentists';
import { PsychoPage } from '../psycho/psycho';

/**
 * Generated class for the DoctypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctype',
  templateUrl: 'doctype.html',
})
export class DoctypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  cardio(){
this.navCtrl.push(DoctorsPage)
}
dentist(){
  this.navCtrl.push(DentistsPage)
}
psy(){
  this.navCtrl.push(PsychoPage)
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctypePage');
  }

}
