// Import các module cần thiết
const express = require('express');
const app = express();
const fileRoutes = require('./routes/fileRoutes');

// Cấu hình express app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sử dụng fileRoutes để xử lý các yêu cầu liên quan đến tệp tin
app.use('/api/files', fileRoutes);

// Khởi chạy server
const PORT = 3000; // Port của server
app.listen(PORT, () => {
  console.log(`Server đang lắng nghe trên cổng ${PORT}`);
});
