import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColeccionPageRoutingModule } from './coleccion-routing.module';

import { ColeccionPage } from './coleccion.page';
import { ComponentsModule } from '../../components/components.module';
import { PopoverComponent } from '../../components/popover/popover.component';

@NgModule({
  entryComponents: [
    PopoverComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ColeccionPageRoutingModule
  ],
  declarations: [ColeccionPage]
})
export class ColeccionPageModule {}
