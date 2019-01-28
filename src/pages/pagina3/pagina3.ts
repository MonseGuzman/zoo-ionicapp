import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  animal: any = {};

  constructor(private navCtrl: NavController, private navParams: NavParams) {

    this.animal = this.navParams.get("animal");
  }

  irAtras(){
    //return a page back 
    this.navCtrl.pop();
  }

  irRoot(){
    //return at principal
    this.navCtrl.popToRoot();
  }

}
