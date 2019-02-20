import { TestBed } from '@angular/core/testing';

import { GovukFormlyTemplatesService } from './govuk-formly-templates.service';

describe('GovukFormlyTemplatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GovukFormlyTemplatesService = TestBed.get(GovukFormlyTemplatesService);
    expect(service).toBeTruthy();
  });
});
