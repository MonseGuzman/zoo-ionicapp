import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  animales: any[] = [
    {
      nombre: "Caballo",
      foto: "assets/animalitos/caballito.jpg"
    },
    {
      nombre: "Cabra",
      foto: "assets/animalitos/cabrita.jpg"
    },
    {
      nombre: "Cerdo",
      foto: "assets/animalitos/cerdito.jpg" 
    },
    {
      nombre: "Gallo",
      foto: "assets/animalitos/gallito.jpg" 
    },
    {
      nombre: "Mono",
      foto: "assets/animalitos/monito.jpg" 
    },
    {
      nombre: "Perro",
      foto: "assets/animalitos/perrito.jpeg" 
    },
    {
      nombre: "Serpiente",
      foto: "assets/animalitos/serpiente.jpg" 
    },
    {
      nombre: "Tigre",
      foto: "assets/animalitos/tigre.png" 
    },
  ];

  pagina3: any = Pagina3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3(animal:any){
    console.log(animal);
    //send params
    this.navCtrl.push(Pagina3Page,{ 'animal': animal });
  }

}
