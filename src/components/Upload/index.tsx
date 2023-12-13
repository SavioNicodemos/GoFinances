import React, { ReactNode } from 'react';

import { useDropzone } from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';

interface UploadProps {
  onUpload: Function;
}

const Upload = ({ onUpload }: UploadProps) => {
  function renderDragMessage(
    isDragActive: boolean,
    isDragRejected: boolean,
  ): ReactNode {
    if (!isDragActive) {
      return (
        <UploadMessage>Selecione ou arraste o arquivo aqui.</UploadMessage>
      );
    }

    if (isDragRejected) {
      return <UploadMessage $type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage $type="success">Solte o arquivo aqui</UploadMessage>;
  }

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: {
        // @ts-ignore
        'text/csv': ['.csv'],
      },
      onDropAccepted: files => onUpload(files),
    });

  return (
    <>
      <DropContainer
        {...getRootProps({ className: 'dropzone' })}
        $isDragActive={isDragActive}
        $isDragReject={isDragReject}
      >
        <input {...getInputProps()} data-testid="upload" />
        {renderDragMessage(isDragActive, isDragReject)}
      </DropContainer>
    </>
  );
};

export default Upload;
