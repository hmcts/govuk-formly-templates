export const govukDateType = {
  name: 'govukdate',
  wrappers: ['formly-govuk-date-wrapper'],
  extends: 'formly-group',
  defaultOptions: {
    fieldGroup: [
      {
        key: 'day',
        type: 'govukdateitem',
        templateOptions: {
          type: 'number',
          label: 'Day',
          cols: 2
        },
      },
      {
        key: 'month',
        type: 'govukdateitem',
        templateOptions: {
          type: 'number',
          label: 'Month',
          cols: 2
        },
      },
      {
        key: 'year',
        type: 'govukdateitem',
        templateOptions: {
          type: 'number',
          label: 'Year',
          cols: 4
        },
      },
    ]
  }
};
