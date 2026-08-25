import * as React from 'react';

declare const Spinner: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    size?: "sm" | "md" | "lg";
    label?: string;
} & React.RefAttributes<HTMLDivElement>>;

export { Spinner };
