import { Component, OnInit } from '@angular/core';

import { ServicioService } from '../../servicios/servicio.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

/*declare var firebase;

var config={
  apiKey: 'AIzaSyC8Xg4nvKh_bS1NNROuBvviIZwh-9OOnB8',
  authDomain: 'appmovil2019-e97b1.firebaseapp.com',
  databaseURL:'https://appmovil2019-e97b1.firebaseio.com'
};
firebase.initializeApp(config);*/
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  prograForm: any[] = [];
  textoBuscar = '';

  constructor( private dataService: ServicioService, public socialSharing: SocialSharing) { }

  ngOnInit() {
    this.dataService.getSearch()// llama el servicio y trae la informacion del ion-search
    .subscribe( prograForm => {
      this.prograForm = prograForm;
     });
   }
   buscar( event) {
     this.textoBuscar = event.detail.value;
   }
    /*share(){
      firebase.database().ref('/appmovil2019-e97b1/').once('value').then(function(data){
        alert(JSON.stringify(data.val()));
      })
    }*/
 }


