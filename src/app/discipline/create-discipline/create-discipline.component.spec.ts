import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDisciplinePageComponent } from './create-discipline.component';

describe('LoginPageComponent', () => {
  let component: CreateDisciplinePageComponent;
  let fixture: ComponentFixture<CreateDisciplinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDisciplinePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDisciplinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
