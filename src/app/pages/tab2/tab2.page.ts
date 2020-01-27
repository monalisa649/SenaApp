import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  noticiaSena: any[] = [];
  @Input() url:string;

  constructor(private dataService: ServicioService) {}

  ngOnInit() {
    this.dataService.getNoticia()// llama el servicio y trae la informacion del ion-search
      .subscribe( noticia => {
        // console.log(noticia);
        this.noticiaSena = noticia;
      });
     }
     shareNoticia(){}
   }