import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoticiaSena } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }
  getSearch() {
    return this.http.get<any[]>(' https://appmovil2019-e97b1.firebaseio.com/programasForm.json');
  }
  getDetalleProFom(id: string) {
    return this.http.get<any[]>(' https://appmovil2019-e97b1.firebaseio.com/programasForm.json/id');
  }
  getNoticia() {
    return this.http.get<any[]>('https://noticiasena-2d4dd.firebaseio.com/notiSena.json');
  }
}
