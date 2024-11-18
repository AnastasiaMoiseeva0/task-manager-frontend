import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderPageComponent } from './header.component';
import { TuiAppearanceModule, TuiAutoColorModule, TuiAvatarModule, TuiButtonModule, TuiNavigationModule } from '@taiga-ui/experimental';
import { TuiDataListModule, TuiExpandModule, TuiHostedDropdownModule, TuiModeModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [HeaderPageComponent],
  imports: [
    CommonModule,
    TuiModeModule,
    TuiAvatarModule,
    TuiHostedDropdownModule,
    TuiNavigationModule,
    TuiExpandModule,
    TuiButtonModule,
    TuiAppearanceModule,
    TuiDataListWrapperModule,
    TuiDataListModule,
    TuiAutoColorModule,
    TuiSvgModule,
    RouterModule
  ],
  exports: [HeaderPageComponent],
})
export class HeaderModule {}
