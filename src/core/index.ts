import { registry } from '../core/register';

import SelectConfig from '@components/Select';
import ButtonConfig from '@components/Button';
import library from '../../dist/index';

Object.values(library).forEach(component => {
  registry.register(component);
});

// async function registerComponentsFromS3() {
//   const fetchComponents = await fetch(
//     'https://jeffrey-jkopay-personal.s3.ap-southeast-1.amazonaws.com/dist/index.js',
//   );
//   Object.values(fetchComponents).forEach(component => {
//     registry.register(component);
//   });
// }

// registerComponentsFromS3();

// const { Select, Button } = library;

// registry.register(Select);
// registry.register(Button);

export { registry };
