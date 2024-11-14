import { Injectable } from '@angular/core';
import { add } from 'date-fns';
import { Observable, of } from 'rxjs';
import {DisciplineDetails } from 'src/dto';

@Injectable()
export class DisciplineService {
  getById$(disciplineId: string): Observable<DisciplineDetails> {
    return of({
      id: disciplineId,
      name: 'Высшая математика',
      checkKnowledge: 'Экзамен', //как будем передавать на бек селект? по id или просто строкой?
      organization: "ПТУ Курочкина",
      tags: ['Шарага'],
    })
  }
}
