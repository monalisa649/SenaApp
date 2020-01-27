import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { SegmentPipe } from './segment.pipe';



@NgModule({
  declarations: [FiltroPipe, SegmentPipe],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroPipe,
    SegmentPipe
  ],
})
export class PipesModule { }
