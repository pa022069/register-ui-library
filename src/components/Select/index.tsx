import { options } from './options';
import { Select } from './component';

const SelectConfig = {
  name: 'select',
  component: Select,
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

export default SelectConfig;
