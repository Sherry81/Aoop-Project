import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
registerForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.registerForm = new FormGroup({
      email : new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      confirmpw: new FormControl(null, Validators.required)
    });
  }
  


  
  // signup(user){
    //console.log(user);
    //this.navCtrl.setRoot(LoginPage)
  //}
  signup(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
     
    });    
    loader.present();
this.navCtrl.setRoot(LoginPage)
  let alert = this.alertCtrl.create({
      title: 'Confirmation',
      subTitle: 'Your account has been successfully made',
      buttons: ['OK']
    });
    alert.present();
  }
  
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    }
  }
  
