import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Upload, X, File, CheckCircle2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
const FileUpload = React.forwardRef(
  ({ className, onFilesSelected, maxFiles = 1, accept, ...props }, ref) => {
    const [dragActive, setDragActive] = React.useState(false);
    const [files, setFiles] = React.useState([]);
    const inputRef = React.useRef(null);
    const handleDrag = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };
    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFiles(e.dataTransfer.files);
      }
    };
    const handleChange = (e) => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        handleFiles(e.target.files);
      }
    };
    const handleFiles = (fileList) => {
      const newFiles = Array.from(fileList).slice(0, maxFiles);
      setFiles(newFiles);
      onFilesSelected?.(fileList);
    };
    const removeFile = (index) => {
      const newFiles = [...files];
      newFiles.splice(index, 1);
      setFiles(newFiles);
    };
    return /* @__PURE__ */ jsxs("div", { className: cn("grid gap-4 w-full animate-in fade-in duration-500", className), children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors duration-200",
            dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
          ),
          onDragEnter: handleDrag,
          onDragLeave: handleDrag,
          onDragOver: handleDrag,
          onDrop: handleDrop,
          onClick: () => inputRef.current?.click(),
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ...props,
                ref: (node) => {
                  inputRef.current = node;
                  if (typeof ref === "function") ref(node);
                  else if (ref) ref.current = node;
                },
                type: "file",
                className: "hidden",
                accept,
                multiple: maxFiles > 1,
                onChange: handleChange
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-2 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "rounded-[3px] bg-primary/10 p-3", children: /* @__PURE__ */ jsx(Upload, { className: "h-6 w-6 text-primary" }) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Clique para enviar ou arraste e solte" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: accept ? `Arquivos aceitos: ${accept}` : "Qualquer arquivo" })
              ] })
            ] })
          ]
        }
      ),
      files.length > 0 && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: files.map((file, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center justify-between rounded-md border bg-card p-2 text-sm animate-in slide-in-from-top-1 duration-200",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 truncate", children: [
              /* @__PURE__ */ jsx(File, { className: "h-4 w-4 text-primary shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "truncate", children: file.name }),
              /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-muted-foreground whitespace-nowrap", children: [
                "(",
                (file.size / 1024).toFixed(1),
                " KB)"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-success" }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7",
                  onClick: (e) => {
                    e.stopPropagation();
                    removeFile(i);
                  },
                  children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
                }
              )
            ] })
          ]
        },
        i
      )) })
    ] });
  }
);
FileUpload.displayName = "FileUpload";
export {
  FileUpload
};
//# sourceMappingURL=file-upload.js.map