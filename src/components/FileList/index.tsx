import React from 'react';

import { Container, FileInfo } from './styles';

type FileProps = {
  name: string;
  readableSize: string;
};

type FileListProps = {
  files: FileProps[];
};

function FileList({ files }: FileListProps) {
  return (
    <Container>
      {files.map(uploadedFile => (
        <li key={uploadedFile.name}>
          <FileInfo>
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.readableSize}</span>
            </div>
          </FileInfo>
        </li>
      ))}
    </Container>
  );
}

export default FileList;
