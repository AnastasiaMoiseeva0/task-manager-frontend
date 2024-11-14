import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiBadgeModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-discipline-table',
  templateUrl: './discipline-table.component.html',
  styleUrl: './discipline-table.component.less',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiBadgeModule,
    TuiTextfieldControllerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisciplineTablePageComponent {

  constructor() {
  }
}
