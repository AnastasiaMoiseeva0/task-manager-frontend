import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  TuiAlertService,
  TuiAppearance,
  tuiButtonOptionsProvider,
} from '@taiga-ui/core';
import { TuiFileLike } from '@taiga-ui/kit';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { DisciplineService } from '../services/discipline.service';
import { EMPTY, catchError, take, tap } from 'rxjs';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-create-discipline-page',
  templateUrl: './create-discipline.component.html',
  styleUrl: './create-discipline.component.less',
  providers: [
    tuiButtonOptionsProvider({
      shape: 'rounded',
      appearance: TuiAppearance.Outline,
      size: 'm',
    }),
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Введите значение',
      },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateDisciplinePageComponent {
  disciplineForm = new FormGroup({
    name: new FormControl<string | null>('', [Validators.required]),
    checkKnowledge: new FormControl<string | null>('', [Validators.required]),
    organization: new FormControl<string | null>(''),
    tags: new FormControl<string[] | null>([]),
    description: new FormControl<string | null>(''),
    files: new FormControl<File[] | null>([]),
  });

  constructor(
    private disciplineService: DisciplineService,
    private tuiAlertService: TuiAlertService,
    private router: Router,
    private logger: LoggerService
  ) {}

  readonly itemsType = ['Экзамен', 'Зачет', 'Диф.зачет'];

  rejectedFiles: readonly TuiFileLike[] = [];

  ngOnInit(): void {
    this.disciplineForm.controls['files'].statusChanges.subscribe(
      (response) => {
        console.info(
          'ERRORS',
          this.disciplineForm.controls['files'].errors,
          '\n'
        );
      }
    );
  }

  onReject(files: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];
  }

  removeFile({ name }: File): void {
    this.disciplineForm.controls['files'].setValue(
      this.disciplineForm.controls['files'].value?.filter(
        (current: File) => current.name !== name
      ) ?? []
    );
  }

  clearRejected({ name }: TuiFileLike): void {
    this.rejectedFiles = this.rejectedFiles.filter(
      (rejected) => rejected.name !== name
    );
  }

  onSubmit() {
    if (!this.disciplineForm.valid) {
      this.disciplineForm.markAllAsTouched();
    }

    const { name, checkKnowledge, organization, tags, description, files } =
      this.disciplineForm.value;

    this.disciplineService
      .create$(
        name!,
        checkKnowledge!,
        organization!,
        tags!,
        description!,
        files!
      )
      .pipe(
        tap(() => {
          this.disciplineForm.reset();
        }),
        catchError(() => {
          this.showErrorNotification();
          this.logger.error('Error fetching create discipline error');
          return EMPTY;
        })
      )
      .subscribe(() => {
        this.router.navigateByUrl('/disciplines');
      });
  }

  private showErrorNotification() {
    this.tuiAlertService
      .open('При создании дисциплины произошла ошибка', {
        status: 'error',
        autoClose: false,
      })
      .pipe(take(1))
      .subscribe();
  }
}
