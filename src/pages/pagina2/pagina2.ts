import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../index.pages';
import { Animal } from '../../interfaces/animal.interface';
import { ANIMALES } from '../../data/data.animales';

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  animales: Animal[] = [];

  pagina3: any = Pagina3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animales = ANIMALES.slice(0);
  }

  irPagina3(animal:any){
    console.log(animal);
    //send params
    this.navCtrl.push(Pagina3Page,{ 'animal': animal });
  }

}
