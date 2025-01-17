import { options } from './options';
import { Button as ButtonComponent } from './component';

const Button = {
  name: 'button',
  component: ButtonComponent,
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

export default Button;
