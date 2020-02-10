import { TestBed } from '@angular/core/testing';

import { Screen.ServiceService } from './src/fw/services/screen.service.service';

describe('Screen.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Screen.ServiceService = TestBed.get(Screen.ServiceService);
    expect(service).toBeTruthy();
  });
});
