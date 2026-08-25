import * as React from 'react';

interface AIPromptBoxProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    onSend?: (value: string) => void;
    isLoading?: boolean;
}
declare const AIPromptBox: React.ForwardRefExoticComponent<AIPromptBoxProps & React.RefAttributes<HTMLTextAreaElement>>;

export { AIPromptBox };
