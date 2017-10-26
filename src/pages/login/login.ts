import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormControl, Validators } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loginForm = new FormGroup({
      email : new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }
  signin(user){
    console.log(user);
     this.navCtrl.setRoot(HomePage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
