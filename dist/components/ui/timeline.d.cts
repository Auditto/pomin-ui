import * as React from 'react';

declare const Timeline: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    time: string;
    icon?: React.ReactNode;
    isActive?: boolean;
}
declare const TimelineItem: React.ForwardRefExoticComponent<TimelineItemProps & React.RefAttributes<HTMLDivElement>>;

export { Timeline, TimelineItem };
