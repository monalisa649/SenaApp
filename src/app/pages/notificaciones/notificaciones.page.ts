import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {
fcmtoken: any="";
  constructor(public platform: Platform) { 
    this.platform.ready().then(()=>{
      
    });
    
  }

  GetToken(){
    this.fcmtoken=localStorage.getItem("token");
      alert(this.fcmtoken);
  }
  ngOnInit() {
  }

}
