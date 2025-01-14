import { useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '@components/LoadingBox';
import { RenderComponent } from '@core/render';
import { selectState } from '@helpers/redux/slices/templateSlice';
import { registry } from '@core/register';
import SelectConfig from '@core/components/Select';

registry.register(SelectConfig);

export default function IndexPage() {
  const { isLoaded } = useSelector(selectState);
  const componentConfig = registry.getComponent('select');
  const schema = componentConfig.options?.schema;

  const [props, setProps] = useState(
    Object.fromEntries(
      Object.entries(schema.properties).map(([key, value]: any) => [key, value.default]),
    ),
  );

  const handleChange = (key: string, value: any) => {
    setProps((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-sm mx-auto flex h-screen flex-col items-center justify-center gap-4">
      {/* {!isLoaded && <Loading />} */}
      {Object.entries(schema.properties).map(([key, value]: any) => (
        <div key={key}>
          <label>{key}：</label>
          <select value={props[key]} onChange={e => handleChange(key, e.target.value)}>
            {value.enum.map((option: any) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      <RenderComponent
        name="select"
        config={{
          variant: 'secondary',
          size: 'large',
          ...props,
          // options: [
          //   { value: '1', label: 'Option 1' },
          //   { value: '2', label: 'Option 2' },
          //   { value: '3', label: 'Option 3' },
          // ],
        }}
      />
      {/* <div className="flex">
        <button>Check</button>
      </div> */}
    </div>
  );
}
