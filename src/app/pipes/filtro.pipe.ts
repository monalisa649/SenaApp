import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
   /*transform(arreglo: any[], texto: string): any[] {
   if (texto === '') {
      return arreglo;
    }
 texto = texto.toLowerCase();
  return arreglo.filter( item => {
    return item.name.toLowerCase()
    .includes( texto );
  });
  }*/
  transform(arreglo: any[], texto: string): any[] {
    if ( texto === '' || texto.length < 3 ) { return arreglo; }
    const resultText = [];
    for (const Prograform of arreglo) {
if (Prograform.name.toLowerCase().indexOf(texto.toLowerCase()) > -1) {
resultText.push(Prograform);
 }
}
    return resultText;
}
}
