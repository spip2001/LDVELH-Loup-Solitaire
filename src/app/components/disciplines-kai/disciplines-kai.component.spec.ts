import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinesKaiComponent } from './disciplines-kai.component';

describe('DisciplinesKaiComponent', () => {
  let component: DisciplinesKaiComponent;
  let fixture: ComponentFixture<DisciplinesKaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisciplinesKaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisciplinesKaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
