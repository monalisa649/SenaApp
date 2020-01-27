import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public fcm:FCM
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();//Se modificó para utilizar socialSharing antes styleDefault()
      this.splashScreen.hide();
      //recibiendo fcmid
      this.fcm.getToken().then((token)=>{
        localStorage.setItem("token", token);
      }, (err)=>{
        alert(JSON.stringify(err));
      })
      //recibiendo notificación
      this.fcm.onNotification().subscribe((data)=>{
        if(data){

        }else{
          alert(data.message);
        }
      })
      //actualizando token
      this.fcm.onTokenRefresh().subscribe((token)=>{
        localStorage.setItem("token", token);
      })
    });
  }
}
