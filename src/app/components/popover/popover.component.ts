import { Component, OnInit } from '@angular/core';
import { rutaPopover } from 'src/app/interfaces/interfaces';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  
items = Array(5);
rutasPopover: rutaPopover [] = [{
  icon: 'contact',
  name: 'Editar perfíl',
  redirecTo: '/editar-perfil'
},
{
  icon: 'bookmark',
  name: 'Favoritos',
  redirecTo: '/coleccion'
},

/*{
  icon: 'exit',
  name: 'Cerrar sesión',
  redirecTo: ''
},*/

];

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number) {
   this.popoverCtrl.dismiss({
      item: valor
      
    });
    
  }
}
