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
var JuiFormlyLibModule = /** @class */ (function () {
    function JuiFormlyLibModule() {
    }
    JuiFormlyLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        JuiFormlyLibComponent,
                        FormlyFieldInput,
                        FormlyFieldSelect,
                        FormlyFieldCheckbox
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormlyModule,
                        FormlyModule.forRoot({
                            types: [
                                { name: 'input', component: FormlyFieldInput },
                                { name: 'select', component: FormlyFieldSelect },
                                { name: 'checkbox', component: FormlyFieldCheckbox },
                            ]
                        })
                    ],
                    exports: [
                        JuiFormlyLibComponent,
                        FormlyFieldInput,
                        FormlyFieldSelect,
                        FormlyFieldCheckbox
                    ]
                },] }
    ];
    return JuiFormlyLibModule;
}());
export { JuiFormlyLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVpLWZvcm1seS1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanVpLWZvcm1seS1saWIvIiwic291cmNlcyI6WyJsaWIvanVpLWZvcm1seS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFekU7SUFBQTtJQTBCa0MsQ0FBQzs7Z0JBMUJsQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLFlBQVksQ0FBQyxPQUFPLENBQUM7NEJBQ25CLEtBQUssRUFBRTtnQ0FDTCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dDQUM5QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFO2dDQUNoRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFOzZCQUNyRDt5QkFDRixDQUFDO3FCQUNIO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7d0JBQ3JCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7cUJBQ3BCO2lCQUNGOztJQUNpQyx5QkFBQztDQUFBLEFBMUJuQyxJQTBCbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEp1aUZvcm1seUxpYkNvbXBvbmVudCB9IGZyb20gJy4vanVpLWZvcm1seS1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcblxuaW1wb3J0IHsgRm9ybWx5RmllbGRJbnB1dCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtbHktZmllbGQtaW5wdXQnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRTZWxlY3QgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybWx5LWZpZWxkLXNlbGVjdCc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZENoZWNrYm94IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm1seS1maWVsZC1jaGVja2JveCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEp1aUZvcm1seUxpYkNvbXBvbmVudCxcbiAgICBGb3JtbHlGaWVsZElucHV0LFxuICAgIEZvcm1seUZpZWxkU2VsZWN0LFxuICAgIEZvcm1seUZpZWxkQ2hlY2tib3hcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yUm9vdCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7IG5hbWU6ICdpbnB1dCcsIGNvbXBvbmVudDogRm9ybWx5RmllbGRJbnB1dCB9LFxuICAgICAgICB7IG5hbWU6ICdzZWxlY3QnLCBjb21wb25lbnQ6IEZvcm1seUZpZWxkU2VsZWN0IH0sXG4gICAgICAgIHsgbmFtZTogJ2NoZWNrYm94JywgY29tcG9uZW50OiBGb3JtbHlGaWVsZENoZWNrYm94IH0sXG4gICAgICBdXG4gICAgfSlcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEp1aUZvcm1seUxpYkNvbXBvbmVudCxcbiAgICBGb3JtbHlGaWVsZElucHV0LFxuICAgIEZvcm1seUZpZWxkU2VsZWN0LFxuICAgIEZvcm1seUZpZWxkQ2hlY2tib3hcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBKdWlGb3JtbHlMaWJNb2R1bGUgeyB9XG4iXX0=