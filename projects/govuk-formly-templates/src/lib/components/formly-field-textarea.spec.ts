import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { FormlyFieldTextarea } from "./formly-field-textarea";

describe('TextArea FormlyField test', () => {
  let fixture: ComponentFixture<TestComponent>;
  let textareaFieldForm: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormlyFieldTextarea,
        TestComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormlyModule.forRoot({
          types: [
            { name: 'textarea', component: FormlyFieldTextarea }
          ]
        })
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    textareaFieldForm = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the textarea field', async(() => {
    expect(textareaFieldForm.querySelector('formly-field-textarea')).toBeTruthy();
  }));
});

@Component({
  selector: 'test-textarea',
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
      'key': 'exampleTextarea',
      'type': 'textarea',
      'templateOptions': {
        'label': 'Enter text into the textarea'
      }
    }
  ];

}
