import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { FormlyFieldRadio } from "./formly-field-radio";

describe('Radio FormlyField test', () => {
  let fixture: ComponentFixture<TestComponent>;
  let radioFieldForm: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormlyFieldRadio,
        TestComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [
            { name: 'radio', component: FormlyFieldRadio }
          ]
        })
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    radioFieldForm = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the radio field', async(() => {
    expect(radioFieldForm.querySelector('formly-field-radio')).toBeTruthy();
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
      'key': 'exampleRadio',
      'type': 'radio',
      'templateOptions': {
        'label': 'Select relevant option',
        'options': [{ name: 'example-radio-1', value: 'option-1', label: 'Option 1'}]
      }
    }
  ];

}
