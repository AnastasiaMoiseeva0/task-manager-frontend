import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import { TuiAppearance, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { TuiFileLike } from '@taiga-ui/kit';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateDisciplinePageComponent {
  disciplineForm: FormGroup;

  constructor() {
    this.disciplineForm = new FormGroup({
      name: new FormControl(''),
      organization: new FormControl(''),
      checkKnowledge: new FormControl(''),
      tags: new FormControl(''),
      description: new FormControl(''),
      files: new FormControl('')
    });
  }

  readonly itemsType = ['Экзамен', 'Зачет', "Диф.зачет"];

  rejectedFiles: readonly TuiFileLike[] = [];

  ngOnInit(): void {
    this.disciplineForm.controls['files'].statusChanges.subscribe((response) => {
      console.info('STATUS', response);
      console.info('ERRORS', this.disciplineForm.controls['files'].errors, '\n');
    });
  }

  onReject(files: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];
  }

  removeFile({ name }: File): void {
    this.disciplineForm.controls['files'].setValue(
      this.disciplineForm.controls['files'].value?.filter((current: File) => current.name !== name) ?? []
    );
  }

  clearRejected({ name }: TuiFileLike): void {
    this.rejectedFiles = this.rejectedFiles.filter(
      (rejected) => rejected.name !== name
    );
  }

}

export function maxFilesLength(maxLength: number): ValidatorFn {
  return ({ value }: AbstractControl) =>
    value.length > maxLength
      ? {
          maxLength: new TuiValidationError(
            'Error: maximum limit - 5 files for upload'
          ),
        }
      : null;
}
