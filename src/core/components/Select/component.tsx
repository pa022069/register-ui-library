import { twMerge } from 'tailwind-merge';

type TSelectProps = {
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  variant?: 'default' | 'secondary' | 'danger';
  className?: string;
  options?: { value: string; label: string }[];
};

const styleConfig = {
  size: {
    small: 'text-sm px-2 py-1',
    medium: 'text-base px-3 py-2',
    large: 'text-lg px-4 py-3',
  },
  variant: {
    default: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-black',
    danger: 'bg-red-500 text-white',
  },
};

export const Select = ({
  size = 'medium',
  variant = 'default',
  style,
  className,
  options,
  ...props
}: TSelectProps) => {
  const { size: sizeConfig, variant: variantConfig } = styleConfig;

  const styleClasses = twMerge(sizeConfig[size], variantConfig[variant], className);

  return (
    <div>
      <select className={styleClasses} style={style} {...props}>
        {options &&
          options?.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};
