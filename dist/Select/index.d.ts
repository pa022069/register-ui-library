declare const Select: {
    name: string;
    component: ({ size, variant, style, className, options, ...props }: {
        size?: "small" | "medium" | "large";
        style?: React.CSSProperties;
        variant?: "default" | "secondary" | "danger";
        className?: string;
        options?: {
            value: string;
            label: string;
        }[];
    }) => import("react/jsx-runtime").JSX.Element;
    options: {
        schema: {
            type: string;
            properties: {
                size: {
                    type: string;
                    enum: string[];
                    default: string;
                };
                variant: {
                    type: string;
                    enum: string[];
                    default: string;
                };
            };
        };
        styles: {
            defaultStyle: {
                borderRadius: string;
            };
            variants: {
                default: {
                    backgroundColor: string;
                    color: string;
                };
                secondary: {
                    backgroundColor: string;
                    color: string;
                };
                danger: {
                    backgroundColor: string;
                    color: string;
                };
            };
        };
        attributes: {
            size: string;
            options: {
                value: string;
                label: string;
            }[];
        };
    };
};
export default Select;
