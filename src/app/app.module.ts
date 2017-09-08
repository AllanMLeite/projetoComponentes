import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaCarrosComponent } from '../pages/carro-list/carro-list';
import { CarroDetailPage } from '../pages/carro-detail/carro-detail';
import { CarroCreatePage } from '../pages/carro-create/carro-create';

import { CarroProvider } from '../provider/carro-provider';
import { MarcaProvider } from '../provider/marca-provider';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaCarrosComponent,
    CarroDetailPage,
    CarroCreatePage
  ],
  imports: [
    BrowserModule,    
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: CarroDetailPage, name: 'CarroDetailPage', segment: 'carro/:carroId' }
      ]
    }),    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaCarrosComponent,
    CarroDetailPage,
    CarroCreatePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    CarroProvider,
    MarcaProvider
  ]
})
export class AppModule {}
