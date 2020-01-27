import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent implements OnInit {
  @ViewChild ( IonSegment, {static: true} ) segment: IonSegment;
  prograForm: any[] = [];
  tipoFormBuscar = '';

  constructor(private dataService: ServicioService) {}


  ngOnInit() {
    /* this.segment.value='todos';//selecciona el segmento todos "aparece activo"
    this.dataService.getSearch().subscribe( prograForm => {
    this.prograForm = prograForm;
    }); //llamar el servicio y traer información*/

    this.segment.value = 'todos'; // selecciona el segmento todos "aparece activo"
    this.dataService.getSearch().subscribe( prograForm => {
    this.prograForm = prograForm;
    });
  }
  segmentChanged( event ) {
    const valorSegmento = event.detail.value;
    if (valorSegmento === 'todos') {
      this.tipoFormBuscar = '';
      return;
    }
    this.tipoFormBuscar = valorSegmento;
  }
}



