import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Pagina3Page, Pagina2Page, ModalPage, TabsPage, Ajustes2Page, PrincipalPage, AjustesPage } from '../pages/index.pages';

@NgModule({
  declarations: [
    MyApp,
    //HomePage
    Pagina3Page, 
    Pagina2Page, 
    ModalPage, 
    TabsPage, 
    Ajustes2Page, 
    PrincipalPage, 
    AjustesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    Pagina3Page, 
    Pagina2Page, 
    ModalPage, 
    TabsPage, 
    Ajustes2Page, 
    PrincipalPage, 
    AjustesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
