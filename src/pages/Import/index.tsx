import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { filesize } from 'filesize';

import FileList from '../../components/FileList';
import Header from '../../components/Header';
import Upload from '../../components/Upload';

import { Container, Footer, ImportFileContainer, Title } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

type FileProps = {
  file: File;
  name: string;
  readableSize: string;
};

const Import = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const navigate = useNavigate();

  async function handleUpload(): Promise<void> {
    try {
      await Promise.all(
        uploadedFiles.map(file => {
          const data = new FormData();
          data.append('file', file.file, file.name);
          return api.post('/transactions/import', data);
        }),
      );

      navigate('/');
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err.response.error);
    }
  }

  function submitFile(files: File[]): void {
    const filesMapped: FileProps[] = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }));

    setUploadedFiles([...uploadedFiles, ...filesMapped]);
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
