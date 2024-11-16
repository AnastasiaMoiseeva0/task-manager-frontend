// POST register
export interface Register {
  email: string;
  password: string;
}

// POST login
export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

// GET profile/{id}
// UPDATE profile/{id}
export interface Profile {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  university?: string;
  course?: string;
  faculty?: string;
  avatar?: string; // ссылка на загруженную картинку
  contacts: Contacts;
}
export interface Contacts {
  email: string;
  phone?: string;
  telegram?: string;
}

// Общий интерфейс между страницами
export interface Discipline {
  id: string; // "",
  name: string;
  checkKnowledge: string; //как будем передавать на бек селект? по id или просто строкой?
  organization?: string;
  tags?: string[];
}

// GET disciplines?title=string
// title - опциональный квери параметр для поиска по name дисциплин
export type Disciplines = Discipline[];

// GET disciplines/{id}
export type DisciplineDetails = Discipline & {
  description?: string;
  files?: File[]; // чекнуть как будем отправлять файлы
};

// DELETE disciplines/{id}
// UPDATE disciplines/{id}

// POST disciplines
export type DisciplineCreateRequest = Omit<DisciplineDetails, 'id'>;
export type DisciplineCreateResponce = DisciplineDetails;

// --------------

export interface ScheduleEvent {
    id: string
    disciplineId: Discipline['id'], // id/строка
    classType: string, // id/строка из перечисления типов событий (Практика/Лекции/...)
    professorName?: string,
    building?: string,
    auditorium: string,
    startDate: string,
    endDate: string,
    files?: File[]  // чекнуть как будем отправлять файлы
}

// POST disciplines/{id}/events
export type EventCreationResponse = Omit<Discipline, 'id'> & {
  isOddWeek: boolean; // 1 неделя с сентября считается odd, потом even и т.д.
  isRecurrent: boolean; // добавляется только 1 раз или будет потом каждый раз
  startDate: string; // Дата и время в ISO формате из выбранного Classes
  endDate: string; // Дата и время в ISO формате из выбранного Classes
};

// GET disciplines/{id}/events
export type EventsResponse = Event[];

// GET disciplines/{id}/events/{id}
export type EventResponse = Event;

////////

export interface Classes {
  startDate: string; // Дата и время в ISO формате
  endDate: string; // Дата и время в ISO формате
}

export interface ClassesWithEvent extends ScheduleEvent {}

export interface Schedule {
  id: string;
  name: string;
}

// POST schedule
// UPDATE schedule/{id}
export type ScheduleCreateRequest = Omit<Schedule, 'id'> & {
  classes: Classes[];
};
export type ScheduleCreateResponse = Schedule & {
  classes: Classes[];
};

// GET schedules

// GET schedules/{scheduleId}?startDate=string&endDate=string
// startDate - выбранная дата из календаря
// endDate - выбранная дата из календаря
export type ScheduleGetResponse = Schedule & {
  classes: ClassesWithEvent[];
};
