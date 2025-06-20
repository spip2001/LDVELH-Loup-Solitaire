import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleAventureComponent } from './feuille-aventure.component';

describe('FeuilleAventureComponent', () => {
  let component: FeuilleAventureComponent;
  let fixture: ComponentFixture<FeuilleAventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeuilleAventureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeuilleAventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
