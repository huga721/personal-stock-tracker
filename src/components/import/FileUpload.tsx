import React, { useRef, useState } from 'react';
import "./FileUpload.css";

type FileUploadProperties = {
  name: string
}

export const FileUpload = ({name}: FileUploadProperties) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const file = e.target.files?.[0] ?? null;
    setSelectedFile(file);
  }

  return (
    <div
      className={`file-upload-container ${selectedFile ? 'has-file' : ''}`}
      onClick={() => !selectedFile && inputRef.current?.click()}
    >
      <div>
        <p className="file-upload-account-name">{name}</p>
        <p className="file-upload-file-name">
          {selectedFile ? selectedFile.name : 'No file selected'}
        </p>
      </div>

      <div>
        <input ref={inputRef} type="file" onChange={handleFileChange} />
        <button
          className={`file-upload-button ${selectedFile ? 'has-file': ''}`}
          onClick={() => inputRef.current?.click()}
        >
          {selectedFile ? 'Change' : 'Browse'}
        </button>
      </div>
    </div>
  );
};