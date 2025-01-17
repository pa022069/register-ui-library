type TSelectProps = {
    size?: 'small' | 'medium' | 'large';
    style?: React.CSSProperties;
    variant?: 'default' | 'secondary' | 'danger';
    className?: string;
    options?: {
        value: string;
        label: string;
    }[];
};
export declare const Select: ({ size, variant, style, className, options, ...props }: TSelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
