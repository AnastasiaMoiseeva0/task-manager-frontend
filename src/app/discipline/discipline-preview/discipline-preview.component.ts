import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiIslandModule } from '@taiga-ui/kit';
import { AccordionPageComponent } from "../accordion/accordion.component";

@Component({
  selector: 'app-discipline-preview',
  templateUrl: './discipline-preview.component.html',
  styleUrl: './discipline-preview.component.less',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiBadgeModule,
    TuiTextfieldControllerModule,
    TuiIslandModule,
    AccordionPageComponent
],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisciplinePreviewPageComponent {

  constructor() {
  }
}
