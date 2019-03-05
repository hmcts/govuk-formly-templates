import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { FormlyFieldDate } from "./formly-field-date";

describe('Datepicker FormlyField test', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dateFieldForm: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormlyFieldDate,
        TestComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [
            { name: 'date', component: FormlyFieldDate }
          ]
        })
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    dateFieldForm = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  fit('should create the date field', async(() => {
    expect(dateFieldForm.querySelector('formly-field-date')).toBeTruthy();
  }));
});

@Component({
  selector: 'test-checkbox',
  template: `
    <form [formGroup]="form">
      <formly-form [form]="form" [fields]="fields" [model]="model">
      </formly-form>
    </form>
  `
})
export class TestComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      'key': 'exampleDateField',
      'type': 'date',
      'templateOptions': {
        'label': 'Enter Date details'
      }
    }
  ];

}
