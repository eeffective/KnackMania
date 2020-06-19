import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IconsModule } from './utilities/icons/icons.module';
import { KnackComponent } from './components/knack/knack.component';
import { KnackHomeComponent } from './components/knack/knack-home/knack-home.component';
import { IconComponent } from './components/usage/icon/icon.component';
import { CirclePercentageComponent } from './components/usage/circle-percentage/circle-percentage.component';
import { BottomnavComponent } from './components/navigation/bottomnav/bottomnav.component';
import { TopnavComponent } from './components/navigation/topnav/topnav.component';
import { PromptComponent } from './components/prompt/prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    BottomnavComponent,
    routingComponents,
    KnackComponent,
    KnackHomeComponent,
    IconComponent,
    CirclePercentageComponent,
    PromptComponent
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
