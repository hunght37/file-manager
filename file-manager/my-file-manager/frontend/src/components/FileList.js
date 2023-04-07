import React from 'react';
import FileItem from './FileItem';

const FileList = ({ files }) => {
  return (
    <div className="file-list">
      {files.map((file) => (
        <FileItem key={file.id} file={file} />
      ))}
    </div>
  );
};

export default FileList;
