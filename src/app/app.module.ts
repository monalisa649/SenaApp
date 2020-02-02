import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { Facebook } from '@ionic-native/facebook/ngx';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { FCM } from '@ionic-native/fcm/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    PipesModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,

    HttpClientModule],
  providers: [
    StatusBar,
    AngularFireAuth,
    SplashScreen,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharing,
    FCM,
    Facebook
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
