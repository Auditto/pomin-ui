import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const inputVariants: (props?: ({
    variant?: "default" | "glass" | "success" | "filled" | "error" | null | undefined;
    density?: "default" | "compact" | "spacious" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

export { Input, type InputProps, inputVariants };
