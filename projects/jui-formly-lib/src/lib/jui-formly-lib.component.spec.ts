import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiFormlyLibComponent } from './jui-formly-lib.component';

describe('JuiFormlyLibComponent', () => {
  let component: JuiFormlyLibComponent;
  let fixture: ComponentFixture<JuiFormlyLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuiFormlyLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuiFormlyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
