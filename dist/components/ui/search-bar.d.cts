import * as React from 'react';

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onClear?: () => void;
    showShortcut?: boolean;
}
declare const SearchBar: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<HTMLInputElement>>;

export { SearchBar };
