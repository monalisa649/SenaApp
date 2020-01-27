import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  @Input() titulo: string;

  constructor( private popoverCtrl: PopoverController, private authService: AuthService, private router:Router, private aFAuth: AngularFireAuth) { }

  ngOnInit() {}
  async mostrarPop(evento) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: evento,
      backdropDismiss: true
    });
    await popover.present();
 }
 singOut(){
  this.aFAuth.auth.signOut();
  this.router.navigateByUrl('/login');
 }
}
