import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResulBusquedaPage } from './resul-busqueda.page';

const routes: Routes = [
  {
    path: '',
    component: ResulBusquedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResulBusquedaPageRoutingModule {}
