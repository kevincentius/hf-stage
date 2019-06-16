import { TestBed, inject } from '@angular/core/testing';

import { ObjService } from './obj.service';

describe('ObjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjService]
    });
  });

  it('should be created', inject([ObjService], (service: ObjService) => {
    expect(service).toBeTruthy();
  }));
});
