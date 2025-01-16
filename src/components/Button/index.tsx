import { options } from './options';
import { Button } from './component';

const ButtonConfig = {
  name: 'button',
  component: Button,
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

export default ButtonConfig;
