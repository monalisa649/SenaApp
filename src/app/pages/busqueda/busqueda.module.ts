import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaPageRoutingModule } from './busqueda-routing.module';

import { BusquedaPage } from './busqueda.page';
import { PopoverComponent } from '../../components/popover/popover.component';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  entryComponents: [
    PopoverComponent
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaPageRoutingModule
  ],
  declarations: [BusquedaPage]
})
export class BusquedaPageModule {}
