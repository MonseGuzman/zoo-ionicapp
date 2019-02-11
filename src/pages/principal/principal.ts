import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HomePage, Pagina2Page } from '../index.pages';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  detalles: any = Pagina2Page;

  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
  }

  cambiarPagina(){
    this.navCtrl.push (HomePage);
  }

  openMenu(){
    this.menuCtrl.toggle();
  }

}
