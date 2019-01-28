import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina2Page } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pagina2: any = Pagina2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cambiarPagina(){
    this.navCtrl.push (Pagina2Page);
  }

}
