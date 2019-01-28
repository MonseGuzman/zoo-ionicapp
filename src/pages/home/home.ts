import { Component } from '@angular/core';
import { ANIMALES } from '../../data/data.animales';
import { Animal } from '../../interfaces/animal.interface';
import { Refresher, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales: Animal[] = [];
  audio = new Audio;
  audioTiempo: any;
  ordenando: boolean = false;

   constructor() {
    this.animales = ANIMALES.slice(0);
  }

  reproducir(animal: Animal){

    this.pausar(animal);

    if(animal.reproduciendo)
    {
      animal.reproduciendo = false;
      return;
    }

    this.audio.src = animal.audio;

    this.audio.load(); // inicia el sonido
    this.audio.play(); // reproduce

    animal.reproduciendo = true;

    this.audioTiempo = setTimeout(() => animal.reproduciendo = false, animal.duracion * 1000);

    console.log(animal.reproduciendo);

  }

  private pausar(seleccionado: Animal){
    clearTimeout(this.audioTiempo);
    
    this.audio.pause();
    this.audio.currentTime = 0;

    for (let animal of this.animales)
    {
      if(animal.nombre != seleccionado.nombre)
        animal.reproduciendo = false;
    }
  }

  borrar(index: number){
    this.animales.splice(index, 1);
  }

  recargar(refresher: Refresher){
    console.log("Start refresh");

    setTimeout(() => {
      console.log('End refresh');
      this.animales = ANIMALES.slice(0);

      refresher.complete(); // detiene el refresh
    }, 2000); // 2 seg
  }

  ordenar(indices: any){
    console.log(indices);
    this.animales = reorderArray(this.animales, indices);
  }

}
