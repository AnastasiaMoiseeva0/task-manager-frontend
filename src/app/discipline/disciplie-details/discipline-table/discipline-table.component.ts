import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TuiButtonModule, TuiScrollbarModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiBadgeModule } from '@taiga-ui/kit';
import { EMPTY, Observable, map, of, switchMap } from 'rxjs';
import { SheduleService } from 'src/app/schedule/services/shedule.service';
import { ScheduleEvent } from 'src/dto';

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
    TuiScrollbarModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisciplineTablePageComponent {
  events$: Observable<ScheduleEvent[] | null> = EMPTY;
  
  constructor(private sheduleService: SheduleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.events$ = this.activatedRoute.paramMap
      .pipe(
        map((param) => param.get('id')),
        switchMap((id) => id ? this.sheduleService.getSchedulesEvents$(id) : of(null)),
      )
  }
}
