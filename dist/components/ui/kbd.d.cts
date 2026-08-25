import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const kbdVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface KbdProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof kbdVariants> {
}
declare const Kbd: React.ForwardRefExoticComponent<KbdProps & React.RefAttributes<HTMLSpanElement>>;

export { Kbd, type KbdProps, kbdVariants };
