import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovukFormlyTemplatesComponent } from './govuk-formly-templates.component';

describe('GovukFormlyTemplatesComponent', () => {
  let component: GovukFormlyTemplatesComponent;
  let fixture: ComponentFixture<GovukFormlyTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovukFormlyTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovukFormlyTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
