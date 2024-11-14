import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-discipline-page',
  templateUrl: './discipline.component.html',
  styleUrl: './discipline.component.less',
  providers: [
    tuiButtonOptionsProvider({
      shape: 'rounded',
      appearance: TuiAppearance.Outline,
      size: 'm',
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisciplinePageComponent {
  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }
}
