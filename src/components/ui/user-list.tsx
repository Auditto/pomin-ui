import * as React from "react";
import { MoreHorizontal } from "lucide-react";
import { cn } from "../../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";

const UserList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1 w-full animate-in fade-in duration-500", className)}
    {...props}
  />
));
UserList.displayName = "UserList";

interface UserListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  email?: string;
  avatarUrl?: string;
  fallback?: string;
  status?: "online" | "offline" | "away" | "busy";
  actions?: React.ReactNode;
}

const UserListItem = React.forwardRef<HTMLDivElement, UserListItemProps>(
  ({ className, name, email, avatarUrl, fallback, status, actions, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors animate-in slide-in-from-left-2 duration-300",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src={avatarUrl} alt={name} />
              <AvatarFallback>{fallback || name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            {status && (
              <span
                className={cn(
                  "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background",
                  status === "online" && "bg-success",
                  status === "offline" && "bg-muted-foreground",
                  status === "away" && "bg-warning",
                  status === "busy" && "bg-destructive"
                )}
              />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-none">{name}</span>
            {email && <span className="text-xs text-muted-foreground">{email}</span>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {actions || (
            <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    );
  }
);
UserListItem.displayName = "UserListItem";

export { UserList, UserListItem };
