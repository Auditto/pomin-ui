import * as React from 'react';

declare const ChatContainer: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const ChatMessages: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "sent" | "received";
    sender?: string;
    timestamp?: string;
    avatar?: React.ReactNode;
}
declare const ChatBubble: React.ForwardRefExoticComponent<ChatBubbleProps & React.RefAttributes<HTMLDivElement>>;
declare const ChatInput: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
    onValueChange?: (value: string) => void;
    onSend?: () => void;
    placeholder?: string;
} & React.RefAttributes<HTMLDivElement>>;

export { ChatBubble, ChatContainer, ChatInput, ChatMessages };
