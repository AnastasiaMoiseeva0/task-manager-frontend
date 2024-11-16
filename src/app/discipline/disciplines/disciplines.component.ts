import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { DisciplineService } from '../services/discipline.service';
import { Observable } from 'rxjs';
import { Discipline } from 'src/dto';

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
  disciplines$: Observable<Discipline[]>;

  constructor(private disciplinesService: DisciplineService) {
    this.searchForm = new FormGroup({
      search: new FormControl<string>(''),
    });

    this.disciplines$ = this.disciplinesService.getDisciplines$();
  }
}
