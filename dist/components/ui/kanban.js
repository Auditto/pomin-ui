import { jsx, jsxs } from "react/jsx-runtime";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { MoreHorizontal, GripVertical, Clock, MessageSquare, Paperclip } from "lucide-react";
import { cn } from "../../lib/utils";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Progress } from "./progress";
const KanbanCard = ({ task, index, variant = "project" }) => {
  return /* @__PURE__ */ jsx(Draggable, { draggableId: task.id, index, children: (provided, snapshot) => /* @__PURE__ */ jsx(
    Card,
    {
      ref: provided.innerRef,
      ...provided.draggableProps,
      ...provided.dragHandleProps,
      className: cn(
        "group mb-3 select-none bg-card transition-all duration-200 hover:border-primary/40",
        snapshot.isDragging && "z-50 rotate-1 scale-[1.02] border-primary shadow-md ring-2 ring-primary/20",
        variant === "crm" && "border-l-4",
        task.priority === "urgent" && "border-l-hub-rose",
        task.priority === "high" && "border-l-hub-amber"
      ),
      children: /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3.5 p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 flex-1", children: [
            task.label && /* @__PURE__ */ jsx(Badge, { variant: task.labelVariant || "secondary", className: "h-5 px-2 py-0 text-[11px] font-semibold uppercase tracking-[0.08em]", children: task.label }),
            /* @__PURE__ */ jsx("h4", { className: "line-clamp-2 text-sm font-semibold leading-snug transition-colors group-hover:text-primary", children: task.title })
          ] }),
          /* @__PURE__ */ jsx(GripVertical, { className: "h-4 w-4 text-muted-foreground/20 group-hover:text-muted-foreground/40 shrink-0" })
        ] }),
        task.description && variant !== "minimal" && /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-[13px] leading-relaxed text-muted-foreground", children: task.description }),
        task.progress !== void 0 && variant === "project" && /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { children: "Progresso" }),
            /* @__PURE__ */ jsxs("span", { children: [
              task.progress,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: task.progress, className: "h-1" })
        ] }),
        task.tags && task.tags.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: task.tags.map((tag) => /* @__PURE__ */ jsxs("span", { className: "rounded bg-secondary px-1.5 py-0.5 text-[11px] font-medium text-secondary-foreground", children: [
          "#",
          tag
        ] }, tag)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            task.dueDate && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-[11px] text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ jsx("span", { children: task.dueDate })
            ] }),
            (task.commentsCount || task.attachmentsCount) && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[11px] text-muted-foreground", children: [
              task.commentsCount && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-0.5", children: [
                /* @__PURE__ */ jsx(MessageSquare, { className: "h-3.5 w-3.5" }),
                " ",
                task.commentsCount
              ] }),
              task.attachmentsCount && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-0.5", children: [
                /* @__PURE__ */ jsx(Paperclip, { className: "h-3.5 w-3.5" }),
                " ",
                task.attachmentsCount
              ] })
            ] })
          ] }),
          task.assignee && /* @__PURE__ */ jsxs(Avatar, { className: "h-6 w-6 ring-2 ring-background", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: task.assignee.avatar }),
            /* @__PURE__ */ jsx(AvatarFallback, { className: "text-[10px]", children: task.assignee.name.substring(0, 2).toUpperCase() })
          ] })
        ] })
      ] })
    }
  ) });
};
const KanbanBoard = ({ data, onTaskMove, variant = "project", className }) => {
  return /* @__PURE__ */ jsx(DragDropContext, { onDragEnd: (result) => onTaskMove?.(result), children: /* @__PURE__ */ jsx("div", { className: cn("premium-scroll flex h-full gap-5 overflow-x-auto pb-4 animate-in fade-in duration-500", className), children: data.map((column) => /* @__PURE__ */ jsxs("div", { className: "flex w-full min-w-[300px] max-w-[360px] flex-col gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" }),
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-[0.04em] text-foreground", children: column.title }),
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "h-6 min-w-6 justify-center rounded px-1.5 text-[11px] font-semibold", children: column.tasks.length })
      ] }),
      /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8 rounded-md hover:bg-muted/50", children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsx(Droppable, { droppableId: column.id, children: (provided, snapshot) => /* @__PURE__ */ jsxs(
      "div",
      {
        ref: provided.innerRef,
        ...provided.droppableProps,
        className: cn(
          "flex min-h-[500px] flex-1 flex-col rounded-[5px] border border-border/50 bg-muted/20 p-3 transition-colors duration-200",
          snapshot.isDraggingOver && "bg-muted/40 border-dashed border-muted-foreground/20"
        ),
        children: [
          column.tasks.map((task, index) => /* @__PURE__ */ jsx(KanbanCard, { task, index, variant }, task.id)),
          provided.placeholder,
          /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "mt-2 h-10 w-full rounded-md border border-dashed border-muted-foreground/20 text-muted-foreground transition-all hover:border-primary/30 hover:bg-background/50 hover:text-foreground", children: /* @__PURE__ */ jsx("span", { className: "text-[13px] font-medium", children: "+ Adicionar Tarefa" }) })
        ]
      }
    ) })
  ] }, column.id)) }) });
};
export {
  KanbanBoard
};
//# sourceMappingURL=kanban.js.map