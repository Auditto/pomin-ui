import * as React from 'react';

type ComboboxOption = {
    label: string;
    value: string;
};
type ComboboxProps = {
    options: ComboboxOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
    className?: string;
};
declare function Combobox({ options, value, onValueChange, placeholder, searchPlaceholder, emptyText, className, }: ComboboxProps): React.JSX.Element;

export { Combobox, type ComboboxOption };
