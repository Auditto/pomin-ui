import * as React from 'react';

interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onFilesSelected?: (files: FileList) => void;
    maxFiles?: number;
    accept?: string;
}
declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLInputElement>>;

export { FileUpload };
