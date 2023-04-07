import React, { useState } from 'react';

const FileUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Xử lý logic tải lên tệp lên máy chủ
    // Sử dụng selectedFile để truyền tệp cần tải lên

    // Sau khi hoàn thành tải lên, gọi hàm callback onUpload để thông báo cho thành phần cha
    onUpload(selectedFile);
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
