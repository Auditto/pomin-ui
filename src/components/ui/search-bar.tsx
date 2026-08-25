import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Input } from "./input";
import { Button } from "./button";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  showShortcut?: boolean;
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onClear, showShortcut = true, value, onChange, ...props }, ref) => {
    return (
      <div className={cn("relative flex w-full max-w-sm items-center animate-in fade-in duration-500", className)}>
        <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
        <Input
          {...props}
          ref={ref}
          value={value}
          onChange={onChange}
          className="pl-9 pr-12 h-10 rounded-full bg-muted/50 focus:bg-background transition-all"
        />
        <div className="absolute right-3 flex items-center gap-1">
          {value && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full"
              onClick={onClear}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
          {showShortcut && !value && (
            <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          )}
        </div>
      </div>
    );
  }
);
SearchBar.displayName = "SearchBar";

export { SearchBar };
