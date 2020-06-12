import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KnackListComponent } from './components/knack-list/knack-list.component';
import { KnackDetailsComponent } from './components/knack-details/knack-details.component';
import { ExploreComponent } from './components/explore/explore.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'knacks/:category', component: KnackListComponent },
  { path: 'knacks:name', component: KnackDetailsComponent },
  { path: 'explore', component: ExploreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  KnackDetailsComponent,
  KnackListComponent,
  ExploreComponent
]
