import * as React from 'react';

type StatTone = "blue" | "emerald" | "amber" | "rose" | "indigo" | "neutral";
interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    value: string | number;
    description?: string;
    icon?: React.ReactNode;
    tone?: StatTone;
    trend?: {
        value: number;
        label: string;
        direction: "up" | "down" | "neutral";
    };
}
declare const StatCard: React.ForwardRefExoticComponent<StatCardProps & React.RefAttributes<HTMLDivElement>>;

export { StatCard };
