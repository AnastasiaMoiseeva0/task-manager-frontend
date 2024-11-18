import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderPageComponent {
  expanded = false
  open = false

  submenu: any;
}
