import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { PopoverComponent } from './popover/popover.component';
import { SegmentComponent } from './segment/segment.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SubHeaderComponent,
    PopoverComponent,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    HeaderComponent,
    SubHeaderComponent,
    PopoverComponent,
    SegmentComponent
  ]
})
export class ComponentsModule { }
