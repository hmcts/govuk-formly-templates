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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianVpLWZvcm1seS1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanVpLWZvcm1seS1saWIvIiwic291cmNlcyI6WyJsaWIvanVpLWZvcm1seS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFekU7SUFBQTtJQXlCa0MsQ0FBQzs7Z0JBekJsQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixZQUFZLENBQUMsT0FBTyxDQUFDOzRCQUNuQixLQUFLLEVBQUU7Z0NBQ0wsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQ0FDOUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRTtnQ0FDaEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRTs2QkFDckQ7eUJBQ0YsQ0FBQztxQkFDSDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsbUJBQW1CO3FCQUNwQjtpQkFDRjs7SUFDaUMseUJBQUM7Q0FBQSxBQXpCbkMsSUF5Qm1DO1NBQXRCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKdWlGb3JtbHlMaWJDb21wb25lbnQgfSBmcm9tICcuL2p1aS1mb3JtbHktbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1seUZpZWxkSW5wdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybWx5LWZpZWxkLWlucHV0JztcbmltcG9ydCB7IEZvcm1seUZpZWxkU2VsZWN0IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm1seS1maWVsZC1zZWxlY3QnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRDaGVja2JveCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtbHktZmllbGQtY2hlY2tib3gnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBKdWlGb3JtbHlMaWJDb21wb25lbnQsXG4gICAgRm9ybWx5RmllbGRJbnB1dCxcbiAgICBGb3JtbHlGaWVsZFNlbGVjdCxcbiAgICBGb3JtbHlGaWVsZENoZWNrYm94XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yUm9vdCh7XG4gICAgICB0eXBlczogW1xuICAgICAgICB7IG5hbWU6ICdpbnB1dCcsIGNvbXBvbmVudDogRm9ybWx5RmllbGRJbnB1dCB9LFxuICAgICAgICB7IG5hbWU6ICdzZWxlY3QnLCBjb21wb25lbnQ6IEZvcm1seUZpZWxkU2VsZWN0IH0sXG4gICAgICAgIHsgbmFtZTogJ2NoZWNrYm94JywgY29tcG9uZW50OiBGb3JtbHlGaWVsZENoZWNrYm94IH0sXG4gICAgICBdXG4gICAgfSlcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEp1aUZvcm1seUxpYkNvbXBvbmVudCxcbiAgICBGb3JtbHlGaWVsZElucHV0LFxuICAgIEZvcm1seUZpZWxkU2VsZWN0LFxuICAgIEZvcm1seUZpZWxkQ2hlY2tib3hcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBKdWlGb3JtbHlMaWJNb2R1bGUgeyB9XG4iXX0=