import * as React from 'react';
import { DropResult } from '@hello-pangea/dnd';

interface KanbanTask {
    id: string;
    title: string;
    description?: string;
    label?: string;
    labelVariant?: "default" | "secondary" | "outline" | "destructive" | "success" | "warning";
    priority?: "low" | "medium" | "high" | "urgent";
    assignee?: {
        name: string;
        avatar?: string;
    };
    dueDate?: string;
    commentsCount?: number;
    attachmentsCount?: number;
    progress?: number;
    tags?: string[];
}
interface KanbanColumnData {
    id: string;
    title: string;
    tasks: KanbanTask[];
}
interface KanbanBoardProps {
    data: KanbanColumnData[];
    onTaskMove?: (result: DropResult) => void;
    variant?: "minimal" | "crm" | "project" | "sales" | "ticket";
    className?: string;
}
declare const KanbanBoard: ({ data, onTaskMove, variant, className }: KanbanBoardProps) => React.JSX.Element;

export { KanbanBoard, type KanbanColumnData, type KanbanTask };
