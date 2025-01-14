import { registry } from '@core/register';
import { options } from './options';
import { Select } from './component';

const SelectConfig = {
  name: 'select',
  component: Select,
  options,
};

registry.register(SelectConfig);

export default SelectConfig;
