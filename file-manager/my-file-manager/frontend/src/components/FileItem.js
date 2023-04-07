import React from 'react';

const FileItem = ({ file }) => {
  return (
    <div className="file-item">
      <img src={file.imageUrl} alt={file.name} />
      <h3>{file.name}</h3>
      <p>{file.description}</p>
      {/* Các đoạn mã khác để hiển thị thông tin của mục tệp */}
    </div>
  );
};

export default FileItem;
