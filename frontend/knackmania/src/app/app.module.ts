import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { BottomnavComponent } from './components/bottomnav/bottomnav.component';
import { IconsModule } from './utilities/icons/icons.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopnavComponent,
    BottomnavComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
