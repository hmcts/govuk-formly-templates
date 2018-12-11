import { TestBed } from '@angular/core/testing';

import { JuiFormlyLibService } from './jui-formly-lib.service';

describe('JuiFormlyLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JuiFormlyLibService = TestBed.get(JuiFormlyLibService);
    expect(service).toBeTruthy();
  });
});
