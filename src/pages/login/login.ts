import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Storage} from "@ionic/storage"


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private user: FormGroup;
  remember: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private events: Events, private storage: Storage) {
    this.user = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
    storage.get('email').then((val) => {
      this.user.setValue({email: val, password: ''});
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  dismiss() {
    this.navCtrl.pop().then();
  }
  logForm() {
    console.log(this.user.value);
    if(this.user.value.password === "azerty") {
      this.events.publish("user.login");
      this.navCtrl.pop().then(() => console.log('Log succes'));
      if(this.remember) {
        this.storage.set('email', this.user.value.email).then(() => console.log('email added'));
      }
    } else {
      alert('Wrong password');
    }
  }
  checkboxToggle() {
    this.remember = !this.remember;
    console.log(this.remember);
  }

}

