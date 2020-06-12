import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutService } from './layout.service';
import { SettingService } from './setting.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [LayoutService, SettingService],
})
export class ServicesModule {}
