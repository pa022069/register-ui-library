export const formSchema = [
  {
    title: 'Form',
    description: 'Form description',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        title: 'Id',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      age: {
        type: 'number',
        title: 'Age',
      },
      email: {
        type: 'string',
        title: 'Email',
      },
      password: {
        type: 'string',
        title: 'Password',
      },
      confirmPassword: {
        type: 'string',
        title: 'Confirm Password',
      },
    },
  },
];
