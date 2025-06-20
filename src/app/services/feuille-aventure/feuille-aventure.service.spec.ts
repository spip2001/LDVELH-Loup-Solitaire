import { TestBed } from '@angular/core/testing';

import { FeuilleAventureService } from '../../services/feuille-aventure/feuille-aventure.service';

describe('FeuilleAventureService', () => {
  let service: FeuilleAventureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeuilleAventureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
