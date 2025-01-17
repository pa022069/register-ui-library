type TButtonProps = {
    size?: 'small' | 'medium' | 'large';
    style?: React.CSSProperties;
    variant?: 'default' | 'secondary' | 'danger';
    className?: string;
    children: React.ReactNode;
};
export declare const Button: ({ size, variant, style, className, children, ...props }: TButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
