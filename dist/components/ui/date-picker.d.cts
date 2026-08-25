import * as React from 'react';

type DatePickerProps = {
    date?: Date;
    onDateChange?: (date: Date | undefined) => void;
    placeholder?: string;
    className?: string;
};
declare function DatePicker({ date, onDateChange, placeholder, className }: DatePickerProps): React.JSX.Element;

export { DatePicker };
