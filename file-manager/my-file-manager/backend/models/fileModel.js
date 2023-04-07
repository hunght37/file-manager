const mongoose = require('mongoose');

// Định nghĩa schema cho mô hình File
const fileSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now
  }
});

// Tạo mô hình File từ schema
const File = mongoose.model('File', fileSchema);

module.exports = File;
