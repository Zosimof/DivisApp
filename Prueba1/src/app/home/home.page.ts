import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //logica a usar, los numeros:
  quetzales: number | null = null; 
  resultado: number | null = null; 

  constructor() {}
  //funcion de calculo
  calcular() {
    if (this.quetzales !== null) {
      this.resultado = this.quetzales / 8;
    }
  }

}
