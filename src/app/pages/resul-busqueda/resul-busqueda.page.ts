import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from '../../servicios/servicio.service';
import { ActivatedRoute, Params } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-resul-busqueda',
  templateUrl: './resul-busqueda.page.html',
  styleUrls: ['./resul-busqueda.page.scss'],
})
export class ResulBusquedaPage implements OnInit {
  PrograForm: any[] = [];
  content: object = null;
  program: {id: any; name: any; };
  @Input() titulo: string;
  constructor( private dataService: ServicioService, private activatesRoute: ActivatedRoute, private socialSharing: SocialSharing ) { }

  ngOnInit() {
    this.program = {
      id: this.activatesRoute.snapshot.params.id,
      name: this.activatesRoute.snapshot.params.name
    };
    this.activatesRoute.params.subscribe(
      (params: Params) => {
        this.program.id = params.id;
        this.program.name = params.name;
      }
    );
  }
  share(){
    this.socialSharing.share(this.program.name,this.program.id)
    .then(()=>{

    }).catch(()=>{

    });
  }
}
