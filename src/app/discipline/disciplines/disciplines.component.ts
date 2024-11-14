import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-disciplines-page',
  templateUrl: './disciplines.component.html',
  styleUrl: './disciplines.component.less',
  providers: [
    tuiButtonOptionsProvider({
      shape: 'rounded',
      appearance: TuiAppearance.Outline,
      size: 'm',
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisciplinesPageComponent {
  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }
}
