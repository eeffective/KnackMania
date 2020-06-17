import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './components/explore/explore.component';
import { KnackListComponent } from './components/knack/knack-list/knack-list.component';
import { KnackDetailsComponent } from './components/knack/knack-details/knack-details.component';
import { KnackComponent } from './components/knack/knack.component';
import { KnackHomeComponent } from './components/knack/knack-home/knack-home.component';


const routes: Routes = [
  { path: '', redirectTo: 'knackmania/knacklist', pathMatch: 'full' },
  { path: 'explore', component: ExploreComponent },
  {
    path: 'knackmania', component: KnackComponent, children: [
      { path: 'home', component: KnackHomeComponent },
      { path: 'list', component: KnackListComponent },
      { path: 'details', component: KnackDetailsComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  KnackComponent,
  KnackDetailsComponent,
  KnackListComponent,
  ExploreComponent
]
