import { useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '@components/LoadingBox';
import { RenderComponent } from '@core/render';
import { selectState } from '@helpers/redux/slices/templateSlice';
import { registry } from '@core';

export default function IndexPage() {
  const { isLoaded } = useSelector(selectState);
  const selectConfig = registry.getComponent('select');
  const buttonConfig = registry.getComponent('button');
  const selectSchema = selectConfig.options?.schema;
  const buttonSchema = buttonConfig.options?.schema;

  const [selectProps, setSelectProps] = useState(
    Object.fromEntries(
      Object.entries(selectSchema.properties).map(([key, value]: any) => [key, value.default]),
    ),
  );

  const [buttonProps, setButtonProps] = useState(
    Object.fromEntries(
      Object.entries(buttonSchema.properties).map(([key, value]: any) => [key, value.default]),
    ),
  );

  const handleSelectChange = (key: string, value: any) => {
    setSelectProps((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleButtonChange = (key: string, value: any) => {
    setButtonProps((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-sm mx-auto flex h-screen flex-col items-center justify-center gap-4">
      {/* {!isLoaded && <Loading />} */}
      {Object.entries(selectSchema.properties).map(([key, value]: any) => (
        <div key={key}>
          <label>{key}：</label>
          <select value={selectProps[key]} onChange={e => handleSelectChange(key, e.target.value)}>
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
          ...selectProps,
        }}
      />

      {Object.entries(buttonSchema.properties).map(([key, value]: any) => (
        <div key={key}>
          <label>{key}：</label>
          <select value={selectProps[key]} onChange={e => handleButtonChange(key, e.target.value)}>
            {value.enum.map((option: any) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      <RenderComponent
        name="button"
        config={{
          variant: 'danger',
          size: 'small',
          children: <>Button</>,
          ...buttonProps,
        }}
      />
      {/* <div className="flex">
        <button>Check</button>
      </div> */}
    </div>
  );
}
