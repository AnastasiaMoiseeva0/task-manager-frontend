import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisciplinesPageComponent } from './disciplines.component';

describe('LoginPageComponent', () => {
  let component: DisciplinesPageComponent;
  let fixture: ComponentFixture<DisciplinesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisciplinesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisciplinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
