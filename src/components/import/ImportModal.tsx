import React, { useState } from 'react';
import "./ImportModal.css"
import { FileUpload } from './FileUpload.tsx';

type ImportModalProperties = {
  onClose: () => void;
}

export function ImportModal({onClose}: ImportModalProperties) {
  const [file, setFile] = useState<File[] | null>(null);

  return (
    <div className="modal-container">
      <div className="import-modal">
        <div className="modal-header">
          <p className="modal-header-text">Import XTB Files</p>
          <p className="modal-header-exit">X</p>
        </div>
        <div className="modal-body">
          <FileUpload name="Normal"/>
          <FileUpload name="IKE"/>
          <FileUpload name="IKZE" />
        </div>
        <div className="modal-footer">
          <button>
            Import
          </button>
          <button onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}