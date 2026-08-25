import * as React from "react";
import { Upload, X, File, CheckCircle2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onFilesSelected?: (files: FileList) => void;
  maxFiles?: number;
  accept?: string;
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, onFilesSelected, maxFiles = 1, accept, ...props }, ref) => {
    const [dragActive, setDragActive] = React.useState(false);
    const [files, setFiles] = React.useState<File[]>([]);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFiles(e.dataTransfer.files);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        handleFiles(e.target.files);
      }
    };

    const handleFiles = (fileList: FileList) => {
      const newFiles = Array.from(fileList).slice(0, maxFiles);
      setFiles(newFiles);
      onFilesSelected?.(fileList);
    };

    const removeFile = (index: number) => {
      const newFiles = [...files];
      newFiles.splice(index, 1);
      setFiles(newFiles);
    };

    return (
      <div className={cn("grid gap-4 w-full animate-in fade-in duration-500", className)}>
        <div
          className={cn(
            "relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors duration-200",
            dragActive
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input
            {...props}
            ref={(node) => {
              // Mesmo caso do ai-prompt-box: encaminhar um ref é escrever nele.
              (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
            }}
            type="file"
            className="hidden"
            accept={accept}
            multiple={maxFiles > 1}
            onChange={handleChange}
          />
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="rounded-[3px] bg-primary/10 p-3">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">
                Clique para enviar ou arraste e solte
              </p>
              <p className="text-xs text-muted-foreground">
                {accept ? `Arquivos aceitos: ${accept}` : "Qualquer arquivo"}
              </p>
            </div>
          </div>
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-md border bg-card p-2 text-sm animate-in slide-in-from-top-1 duration-200"
              >
                <div className="flex items-center gap-2 truncate">
                  <File className="h-4 w-4 text-primary shrink-0" />
                  <span className="truncate">{file.name}</span>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                    ({(file.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(i);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);
FileUpload.displayName = "FileUpload";

export { FileUpload };
