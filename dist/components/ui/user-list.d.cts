import * as React from 'react';

declare const UserList: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface UserListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    email?: string;
    avatarUrl?: string;
    fallback?: string;
    status?: "online" | "offline" | "away" | "busy";
    actions?: React.ReactNode;
}
declare const UserListItem: React.ForwardRefExoticComponent<UserListItemProps & React.RefAttributes<HTMLDivElement>>;

export { UserList, UserListItem };
