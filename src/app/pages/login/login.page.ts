import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { User } from '../../shared/user.class';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
providerFb: firebase.auth.FacebookAuthProvider;
user: User = new User();
  constructor(private authService: AuthService,
              private router: Router,
              private fb: Facebook,
              public platform: Platform,
              public afauth: AngularFireAuth,
              public afdb: AngularFireDatabase,
) {
    this.providerFb= new firebase.auth.FacebookAuthProvider();
   }

ngOnInit() {}
async onLogin() {
const users = await this.authService.onLogin(this.user);
if (users) {
  // console.log('Usuario logeado satisfactoriamente');
  this.router.navigateByUrl('/');
    } else {
   alert('Usuario no existe o información incorrecta');
    }
  }

onLoginGoogle() {
  this.afauth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  this.router.navigateByUrl('/');
}

/*onLoginFacebook(){
  this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));
}*/

onLoginFacebook() {
 if (this.platform.is('cordova')) {
   console.log('platform: cordova');
   this.facebookCordova();
    } else {
    console.log('platform: web');
    this.facebookWeb();
    }
 }

facebookCordova() {
  this.fb.login(['email']).then((response) => {
    const facebookCredential= firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
    firebase.auth().signInWithCredential(facebookCredential)
    .then((success) => {
    console.log('info Facebook: ' + JSON.stringify(success));
    }).catch((error) => {
      console.log('Error' + JSON.stringify(error));
    });
  }).catch((error) => { console.log(error);
    });
}

facebookWeb() {
  this.afauth.auth
  .signInWithPopup( new firebase.auth.FacebookAuthProvider())
  .then((success) => {
    console.log('Info Facebook: ' + JSON.stringify(success));
    this.afdb.object('Users/' + success.user.uid).set({
      displayName: success.user.displayName
    });
    if (this.user) {
      this.router.navigateByUrl('/');
      }
  }).catch((error) => {
    console.log('Error: ' + JSON.stringify(error));
  });  
}
 /*singOut(){
  this.afauth.auth.signOut();
 }*/
}
