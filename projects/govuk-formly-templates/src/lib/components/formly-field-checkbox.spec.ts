import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";
import { FormlyFieldCheckbox } from "./formly-field-checkbox";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Component } from "@angular/core";

describe('Checkbox FormlyField test', () => {
  let fixture: ComponentFixture<TestComponent>;
  let checkboxFieldForm: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormlyFieldCheckbox,
        TestComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [
            { name: 'checkbox', component: FormlyFieldCheckbox }
          ]
        })
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    checkboxFieldForm = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the checkbox field', async(() => {
    expect(checkboxFieldForm.querySelector('formly-field-checkbox')).toBeTruthy();
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
      'key': 'exampleCheckbox',
      'type': 'checkbox',
      'templateOptions': {
        'label': 'example-checkbox'
      }
    }
  ];

}
