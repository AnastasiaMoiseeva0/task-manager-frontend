import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { EMPTY, Observable, map, of, switchMap } from 'rxjs';
import { DisciplineDetails } from 'src/dto';
import { DisciplineService } from '../services/discipline.service';
import { ActivatedRoute } from '@angular/router';

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
  public discipline$: Observable<DisciplineDetails | null> = EMPTY;
    constructor(private disciplineService: DisciplineService, private activatedRoute: ActivatedRoute ) {
  }

  ngOnInit() {
    this.discipline$ = this.activatedRoute.paramMap
      .pipe(
        map((param) => param.get('id')),
        switchMap((id) => id ? this.disciplineService.getDiscipline$(id) : of(null)),
      )
  }
}

