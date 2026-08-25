import * as React from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { MoreHorizontal, GripVertical, Clock, MessageSquare, Paperclip, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Progress } from "./progress";

// --- TYPES ---
export interface KanbanTask {
  id: string;
  title: string;
  description?: string;
  label?: string;
  labelVariant?: "default" | "secondary" | "outline" | "destructive" | "success" | "warning";
  priority?: "low" | "medium" | "high" | "urgent";
  assignee?: { name: string; avatar?: string };
  dueDate?: string;
  commentsCount?: number;
  attachmentsCount?: number;
  progress?: number;
  tags?: string[];
}

export interface KanbanColumnData {
  id: string;
  title: string;
  tasks: KanbanTask[];
}

// --- CARD COMPONENT ---
interface KanbanCardProps {
  task: KanbanTask;
  index: number;
  variant?: "minimal" | "crm" | "project" | "sales" | "ticket";
}

const KanbanCard = ({ task, index, variant = "project" }: KanbanCardProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={cn(
            "group mb-3 select-none bg-card transition-all duration-200 hover:border-primary/40",
            snapshot.isDragging && "z-50 rotate-1 scale-[1.02] border-primary shadow-md ring-2 ring-primary/20",
            variant === "crm" && "border-l-4",
            task.priority === "urgent" && "border-l-hub-rose",
            task.priority === "high" && "border-l-hub-amber"
          )}
        >
          <CardContent className="space-y-3.5 p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1.5 flex-1">
                {task.label && (
                  <Badge variant={task.labelVariant || "secondary"} className="h-5 px-2 py-0 text-[11px] font-semibold uppercase tracking-[0.08em]">
                    {task.label}
                  </Badge>
                )}
                <h4 className="line-clamp-2 text-sm font-semibold leading-snug transition-colors group-hover:text-primary">
                  {task.title}
                </h4>
              </div>
              <GripVertical className="h-4 w-4 text-muted-foreground/20 group-hover:text-muted-foreground/40 shrink-0" />
            </div>

            {task.description && variant !== "minimal" && (
              <p className="line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
                {task.description}
              </p>
            )}

            {task.progress !== undefined && variant === "project" && (
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>Progresso</span>
                  <span>{task.progress}%</span>
                </div>
                <Progress value={task.progress} className="h-1" />
              </div>
            )}

            {task.tags && task.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {task.tags.map(tag => (
                  <span key={tag} className="rounded bg-secondary px-1.5 py-0.5 text-[11px] font-medium text-secondary-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-3">
                {task.dueDate && (
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{task.dueDate}</span>
                  </div>
                )}
                {(task.commentsCount || task.attachmentsCount) && (
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    {task.commentsCount && (
                      <span className="flex items-center gap-0.5">
                        <MessageSquare className="h-3.5 w-3.5" /> {task.commentsCount}
                      </span>
                    )}
                    {task.attachmentsCount && (
                      <span className="flex items-center gap-0.5">
                        <Paperclip className="h-3.5 w-3.5" /> {task.attachmentsCount}
                      </span>
                    )}
                  </div>
                )}
              </div>
              {task.assignee && (
                <Avatar className="h-6 w-6 ring-2 ring-background">
                  <AvatarImage src={task.assignee.avatar} />
                  <AvatarFallback className="text-[10px]">{task.assignee.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};

// --- BOARD COMPONENT ---
interface KanbanBoardProps {
  data: KanbanColumnData[];
  onTaskMove?: (result: DropResult) => void;
  variant?: "minimal" | "crm" | "project" | "sales" | "ticket";
  className?: string;
}

const KanbanBoard = ({ data, onTaskMove, variant = "project", className }: KanbanBoardProps) => {
  return (
    <DragDropContext onDragEnd={(result) => onTaskMove?.(result)}>
      <div className={cn("premium-scroll flex h-full gap-5 overflow-x-auto pb-4 animate-in fade-in duration-500", className)}>
        {data.map((column) => (
          <div key={column.id} className="flex w-full min-w-[300px] max-w-[360px] flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2.5">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.04em] text-foreground">{column.title}</h3>
                <Badge variant="secondary" className="h-6 min-w-6 justify-center rounded px-1.5 text-[11px] font-semibold">
                  {column.tasks.length}
                </Badge>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-muted/50">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <Droppable droppableId={column.id}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={cn(
                    "flex min-h-[500px] flex-1 flex-col rounded-[5px] border border-border/50 bg-muted/20 p-3 transition-colors duration-200",
                    snapshot.isDraggingOver && "bg-muted/40 border-dashed border-muted-foreground/20"
                  )}
                >
                  {column.tasks.map((task, index) => (
                    <KanbanCard key={task.id} task={task} index={index} variant={variant} />
                  ))}
                  {provided.placeholder}
                  
                  <Button variant="ghost" className="mt-2 h-10 w-full rounded-md border border-dashed border-muted-foreground/20 text-muted-foreground transition-all hover:border-primary/30 hover:bg-background/50 hover:text-foreground">
                    <span className="text-[13px] font-medium">+ Adicionar Tarefa</span>
                  </Button>
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export { KanbanBoard };
