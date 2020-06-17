import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Box, Users, Aperture, UserX, User, Compass, Globe, Grid, Heart, Hexagon, Home, MoreHorizontal, MoreVertical, Music, Video, Triangle, PenTool } from 'angular-feather/icons';

const icons = {
  Box, UserX, Users, User, Compass, Aperture, Globe, Grid, Heart, Hexagon, Home, MoreHorizontal, MoreVertical, Music, Video, Triangle, PenTool
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
