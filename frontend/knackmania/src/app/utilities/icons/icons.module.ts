import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Box, Compass, Globe, Grid, Heart, Hexagon, Home, MoreHorizontal, MoreVertical, Music, Video, Triangle, PenTool } from 'angular-feather/icons';

const icons = {
  Box, Compass, Globe, Grid, Heart, Hexagon, Home, MoreHorizontal, MoreVertical, Music, Video, Triangle, PenTool
}

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
