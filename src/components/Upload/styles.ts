import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #12a454;
`;

const dragReject = css`
  border-color: #e83f5b;
`;

type DropContainerProps = {
  $isDragActive: boolean;
  $isDragReject: boolean;
};
export const DropContainer = styled.div.attrs<DropContainerProps>({
  className: 'dropzone',
})`
  border: 1.5px dashed #969cb3;
  border-radius: 5px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${({ $isDragActive }) => $isDragActive && dragActive}

  ${({ $isDragReject }) => $isDragReject && dragReject}
`;

const messageColors = {
  default: '#5636D3',
  error: '#e83f5b',
  success: '#12a454',
};

type UploadMessageProps = {
  $type?: 'error' | 'success' | 'default';
};
export const UploadMessage = styled.p<UploadMessageProps>`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  padding: 48px 0;

  color: ${({ $type }) => messageColors[$type || 'default']};

  justify-content: center;
  align-items: center;
`;
