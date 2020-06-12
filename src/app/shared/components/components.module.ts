import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { SearchComponent } from './search/search.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [HeaderComponent, HamburgerComponent, SearchComponent, FullscreenComponent, SettingComponent],
  imports: [CommonModule],
  entryComponents: [HeaderComponent, HamburgerComponent, SearchComponent, FullscreenComponent, SettingComponent],
  exports: [HeaderComponent, HamburgerComponent, SearchComponent, FullscreenComponent, SettingComponent],
})
export class ComponentsModule {}
