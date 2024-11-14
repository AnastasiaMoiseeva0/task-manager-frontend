import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisciplinePageComponent } from './discipline.component';

describe('LoginPageComponent', () => {
  let component: DisciplinePageComponent;
  let fixture: ComponentFixture<DisciplinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisciplinePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisciplinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
