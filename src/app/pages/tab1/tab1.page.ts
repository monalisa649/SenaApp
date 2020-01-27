import { Component, OnInit } from '@angular/core';
import { PopoverComponent } from '../../components/popover/popover.component';
import { PopoverController } from '@ionic/angular';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private dataService: ServicioService, 
    private popoverCtrl: PopoverController,
    private authService: AuthService,
    private aFAuth: AngularFireAuth, 
    private router: Router) {}

  ngOnInit() {
    /*
   this.dataService.getSearch()//llama el servicio y trae la informacion del ion-search
   .subscribe( prograForm => {
     this.prograForm = prograForm;
    });*/
  }
routingBusqueda() {
    this.router.navigate(['/busqueda']);
}
 /* buscar( event) {
    this.textoBuscar = event.detail.value;
}
selectItem(val){
  alert("Has seleccionado"+val)
}*/
async mostrarPop(evento) {
  const popover = await this.popoverCtrl.create({
    component: PopoverComponent,
    event: evento,
    backdropDismiss: true
  });
  await popover.present();
  const { data } = await popover.onDidDismiss();
  }
  singOut(){
    this.aFAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
