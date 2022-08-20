import React from 'react';
import {useDropzone} from 'react-dropzone';
import DocumentsBlue from '../../assets/icons/documents-blue.svg';

export interface DropzoneProps {
    onDrop: (files: File[]) => void;
    placeholder?: string;
}

export const Dropzone: React.FC<DropzoneProps> = ({ onDrop, placeholder }) => {
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, maxFiles: 1})

  return (
    <div className="custom-file-upload" {...getRootProps()}>
      <input {...getInputProps()} />
      <img
        src={DocumentsBlue}
        style={{ height: 32, width: 32, marginBottom: 8 }}
        alt="Documents"
      />
      {
        isDragActive ?
          <p className="mb-0">Drop the file here ...</p> :
          <p className="mb-0">{placeholder}</p>
      }
    </div>
  )
}