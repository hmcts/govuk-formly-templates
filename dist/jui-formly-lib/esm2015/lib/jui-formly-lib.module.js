/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { JuiFormlyLibComponent } from './jui-formly-lib.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldInput } from './components/formly-field-input';
import { FormlyFieldSelect } from './components/formly-field-select';
import { FormlyFieldCheckbox } from './components/formly-field-checkbox';
import { FormlyFieldRadio } from './components/formly-field-radio';
import { FormlyFieldTextarea } from './components/formly-field-textarea';
export class JuiFormlyLibModule {
}
JuiFormlyLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    JuiFormlyLibComponent,
                    FormlyFieldInput,
                    FormlyFieldSelect,
                    FormlyFieldCheckbox,
                    FormlyFieldRadio,
                    FormlyFieldTextarea
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormlyModule.forRoot({
                        types: [
                            { name: 'input', component: FormlyFieldInput },
                            { name: 'select', component: FormlyFieldSelect },
                            { name: 'checkbox', component: FormlyFieldCheckbox },
                            { name: 'radio', component: FormlyFieldRadio },
                            { name: 'textarea', component: FormlyFieldTextarea },
                        ]
                    })
                ],
                exports: [
                    JuiFormlyLibComponent,
                    FormlyFieldInput,
                    FormlyFieldSelect,
                    FormlyFieldCheckbox,
                    FormlyFieldRadio,
                    FormlyFieldTextarea
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVpLWZvcm1seS1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanVpLWZvcm1seS1saWIvIiwic291cmNlcyI6WyJsaWIvanVpLWZvcm1seS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFpQ3pFLE1BQU0sT0FBTyxrQkFBa0I7OztZQS9COUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixxQkFBcUI7b0JBQ3JCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLFlBQVksQ0FBQyxPQUFPLENBQUM7d0JBQ25CLEtBQUssRUFBRTs0QkFDTCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFOzRCQUM5QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFOzRCQUNoRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFOzRCQUNwRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFOzRCQUM5QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFO3lCQUNyRDtxQkFDRixDQUFDO2lCQUNIO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsbUJBQW1CO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEp1aUZvcm1seUxpYkNvbXBvbmVudCB9IGZyb20gJy4vanVpLWZvcm1seS1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcblxuaW1wb3J0IHsgRm9ybWx5RmllbGRJbnB1dCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtbHktZmllbGQtaW5wdXQnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRTZWxlY3QgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybWx5LWZpZWxkLXNlbGVjdCc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZENoZWNrYm94IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm1seS1maWVsZC1jaGVja2JveCc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZFJhZGlvIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm1seS1maWVsZC1yYWRpbyc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZFRleHRhcmVhIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm1seS1maWVsZC10ZXh0YXJlYSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEp1aUZvcm1seUxpYkNvbXBvbmVudCxcbiAgICBGb3JtbHlGaWVsZElucHV0LFxuICAgIEZvcm1seUZpZWxkU2VsZWN0LFxuICAgIEZvcm1seUZpZWxkQ2hlY2tib3gsXG4gICAgRm9ybWx5RmllbGRSYWRpbyxcbiAgICBGb3JtbHlGaWVsZFRleHRhcmVhXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yUm9vdCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7IG5hbWU6ICdpbnB1dCcsIGNvbXBvbmVudDogRm9ybWx5RmllbGRJbnB1dCB9LFxuICAgICAgICB7IG5hbWU6ICdzZWxlY3QnLCBjb21wb25lbnQ6IEZvcm1seUZpZWxkU2VsZWN0IH0sXG4gICAgICAgIHsgbmFtZTogJ2NoZWNrYm94JywgY29tcG9uZW50OiBGb3JtbHlGaWVsZENoZWNrYm94IH0sXG4gICAgICAgIHsgbmFtZTogJ3JhZGlvJywgY29tcG9uZW50OiBGb3JtbHlGaWVsZFJhZGlvIH0sXG4gICAgICAgIHsgbmFtZTogJ3RleHRhcmVhJywgY29tcG9uZW50OiBGb3JtbHlGaWVsZFRleHRhcmVhIH0sXG4gICAgICBdXG4gICAgfSlcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEp1aUZvcm1seUxpYkNvbXBvbmVudCxcbiAgICBGb3JtbHlGaWVsZElucHV0LFxuICAgIEZvcm1seUZpZWxkU2VsZWN0LFxuICAgIEZvcm1seUZpZWxkQ2hlY2tib3gsXG4gICAgRm9ybWx5RmllbGRSYWRpbyxcbiAgICBGb3JtbHlGaWVsZFRleHRhcmVhXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSnVpRm9ybWx5TGliTW9kdWxlIHsgfVxuIl19