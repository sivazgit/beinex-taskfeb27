import { TestBed } from '@angular/core/testing';

import { Interceptor1Interceptor } from './interceptor1.interceptor';

describe('Interceptor1Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Interceptor1Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Interceptor1Interceptor = TestBed.inject(Interceptor1Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
