import { TestBed, inject } from '@angular/core/testing';

import { XmlService } from './xml.service';

describe('XmlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmlService]
    });
  });

  it('should be created', inject([XmlService], (service: XmlService) => {
    expect(service).toBeTruthy();
  }));
});
