import * as React from 'react';

interface FloatingDockProps {
    items: {
        icon: React.ReactNode;
        label: string;
        onClick?: () => void;
    }[];
    className?: string;
}
declare const FloatingDock: ({ items, className }: FloatingDockProps) => React.JSX.Element;

export { FloatingDock };
