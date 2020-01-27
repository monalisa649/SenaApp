import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResulBusquedaPageRoutingModule } from './resul-busqueda-routing.module';

import { ResulBusquedaPage } from './resul-busqueda.page';
import { PopoverComponent } from '../../components/popover/popover.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  entryComponents: [
    PopoverComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ResulBusquedaPageRoutingModule
  ],
  declarations: [ResulBusquedaPage]
})
export class ResulBusquedaPageModule {}
