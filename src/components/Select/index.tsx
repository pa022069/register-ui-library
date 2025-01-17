import { options } from './options';
import { Select as SelectConponent } from './component';

const Select = {
  name: 'select',
  component: SelectConponent,
  options: {
    ...options,
    schema: {
      type: 'object',
      properties: {
        size: {
          type: 'string',
          enum: ['small', 'medium', 'large'],
          default: 'medium',
        },
        variant: {
          type: 'string',
          enum: ['default', 'secondary', 'danger'],
          default: 'default',
        },
      },
    },
  },
};

export default Select;
