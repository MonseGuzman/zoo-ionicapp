import { Component } from '@angular/core';
import { ANIMALES } from '../../data/data.animales';
import { Animal } from '../../interfaces/animal.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales: Animal[] = [];
  audio = new Audio;
  audioTiempo: any;

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

}
