import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormlyModule } from "@ngx-formly/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { GovukFormlyTemplatesModule } from "../../projects/govuk-formly-templates/src/lib/govuk-formly-templates.module";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        GovukFormlyTemplatesModule,
        ReactiveFormsModule,
        FormlyModule.forRoot()
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'govuk-formly-templates'`, async(() => {
    expect(app.title).toEqual('govuk-formly-templates');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tick all that apply');
  }));
});
