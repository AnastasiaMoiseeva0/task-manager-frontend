import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiAccordionModule} from '@taiga-ui/kit';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.less',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiAccordionModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionPageComponent {

  constructor() {
  }
}
