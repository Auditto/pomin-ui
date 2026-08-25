"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var kanban_exports = {};
__export(kanban_exports, {
  KanbanBoard: () => KanbanBoard
});
module.exports = __toCommonJS(kanban_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_dnd = require("@hello-pangea/dnd");
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
var import_card = require("./card");
var import_button = require("./button");
var import_badge = require("./badge");
var import_avatar = require("./avatar");
var import_progress = require("./progress");
const KanbanCard = ({ task, index, variant = "project" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dnd.Draggable, { draggableId: task.id, index, children: (provided, snapshot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_card.Card,
    {
      ref: provided.innerRef,
      ...provided.draggableProps,
      ...provided.dragHandleProps,
      className: (0, import_utils.cn)(
        "group mb-3 select-none bg-card transition-all duration-200 hover:border-primary/40",
        snapshot.isDragging && "z-50 rotate-1 scale-[1.02] border-primary shadow-md ring-2 ring-primary/20",
        variant === "crm" && "border-l-4",
        task.priority === "urgent" && "border-l-hub-rose",
        task.priority === "high" && "border-l-hub-amber"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_card.CardContent, { className: "space-y-3.5 p-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-1.5 flex-1", children: [
            task.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_badge.Badge, { variant: task.labelVariant || "secondary", className: "h-5 px-2 py-0 text-[11px] font-semibold uppercase tracking-[0.08em]", children: task.label }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { className: "line-clamp-2 text-sm font-semibold leading-snug transition-colors group-hover:text-primary", children: task.title })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.GripVertical, { className: "h-4 w-4 text-muted-foreground/20 group-hover:text-muted-foreground/40 shrink-0" })
        ] }),
        task.description && variant !== "minimal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "line-clamp-2 text-[13px] leading-relaxed text-muted-foreground", children: task.description }),
        task.progress !== void 0 && variant === "project" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex justify-between text-[11px] text-muted-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Progresso" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
              task.progress,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_progress.Progress, { value: task.progress, className: "h-1" })
        ] }),
        task.tags && task.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-wrap gap-1", children: task.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "rounded bg-secondary px-1.5 py-0.5 text-[11px] font-medium text-secondary-foreground", children: [
          "#",
          tag
        ] }, tag)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between pt-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
            task.dueDate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-1 text-[11px] text-muted-foreground", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Clock, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: task.dueDate })
            ] }),
            (task.commentsCount || task.attachmentsCount) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2 text-[11px] text-muted-foreground", children: [
              task.commentsCount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex items-center gap-0.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MessageSquare, { className: "h-3.5 w-3.5" }),
                " ",
                task.commentsCount
              ] }),
              task.attachmentsCount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex items-center gap-0.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Paperclip, { className: "h-3.5 w-3.5" }),
                " ",
                task.attachmentsCount
              ] })
            ] })
          ] }),
          task.assignee && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_avatar.Avatar, { className: "h-6 w-6 ring-2 ring-background", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_avatar.AvatarImage, { src: task.assignee.avatar }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_avatar.AvatarFallback, { className: "text-[10px]", children: task.assignee.name.substring(0, 2).toUpperCase() })
          ] })
        ] })
      ] })
    }
  ) });
};
const KanbanBoard = ({ data, onTaskMove, variant = "project", className }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dnd.DragDropContext, { onDragEnd: (result) => onTaskMove?.(result), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_utils.cn)("premium-scroll flex h-full gap-5 overflow-x-auto pb-4 animate-in fade-in duration-500", className), children: data.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex w-full min-w-[300px] max-w-[360px] flex-col gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between px-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-sm font-semibold uppercase tracking-[0.04em] text-foreground", children: column.title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_badge.Badge, { variant: "secondary", className: "h-6 min-w-6 justify-center rounded px-1.5 text-[11px] font-semibold", children: column.tasks.length })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { variant: "ghost", size: "icon", className: "h-8 w-8 rounded-md hover:bg-muted/50", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MoreHorizontal, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dnd.Droppable, { droppableId: column.id, children: (provided, snapshot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref: provided.innerRef,
        ...provided.droppableProps,
        className: (0, import_utils.cn)(
          "flex min-h-[500px] flex-1 flex-col rounded-[5px] border border-border/50 bg-muted/20 p-3 transition-colors duration-200",
          snapshot.isDraggingOver && "bg-muted/40 border-dashed border-muted-foreground/20"
        ),
        children: [
          column.tasks.map((task, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanCard, { task, index, variant }, task.id)),
          provided.placeholder,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { variant: "ghost", className: "mt-2 h-10 w-full rounded-md border border-dashed border-muted-foreground/20 text-muted-foreground transition-all hover:border-primary/30 hover:bg-background/50 hover:text-foreground", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[13px] font-medium", children: "+ Adicionar Tarefa" }) })
        ]
      }
    ) })
  ] }, column.id)) }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  KanbanBoard
});
//# sourceMappingURL=kanban.cjs.map