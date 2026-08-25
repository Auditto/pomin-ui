"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var file_upload_exports = {};
__export(file_upload_exports, {
  FileUpload: () => FileUpload
});
module.exports = __toCommonJS(file_upload_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils");
var import_button = require("./button");
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_utils.cn)("grid gap-4 w-full animate-in fade-in duration-500", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          className: (0, import_utils.cn)(
            "relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors duration-200",
            dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
          ),
          onDragEnter: handleDrag,
          onDragLeave: handleDrag,
          onDragOver: handleDrag,
          onDrop: handleDrop,
          onClick: () => inputRef.current?.click(),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col items-center justify-center gap-2 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rounded-[3px] bg-primary/10 p-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Upload, { className: "h-6 w-6 text-primary" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm font-medium", children: "Clique para enviar ou arraste e solte" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-muted-foreground", children: accept ? `Arquivos aceitos: ${accept}` : "Qualquer arquivo" })
              ] })
            ] })
          ]
        }
      ),
      files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "space-y-2", children: files.map((file, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          className: "flex items-center justify-between rounded-md border bg-card p-2 text-sm animate-in slide-in-from-top-1 duration-200",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2 truncate", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.File, { className: "h-4 w-4 text-primary shrink-0" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "truncate", children: file.name }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "text-[10px] text-muted-foreground whitespace-nowrap", children: [
                "(",
                (file.size / 1024).toFixed(1),
                " KB)"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CheckCircle2, { className: "h-4 w-4 text-success" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_button.Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7",
                  onClick: (e) => {
                    e.stopPropagation();
                    removeFile(i);
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" })
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileUpload
});
//# sourceMappingURL=file-upload.cjs.map