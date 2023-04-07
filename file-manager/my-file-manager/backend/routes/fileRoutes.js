const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

// Định nghĩa các route xử lý yêu cầu liên quan đến tệp tin
router.get('/', fileController.getFileList);
router.get('/:id', fileController.getFileById);
router.post('/', fileController.uploadFile);
router.put('/:id', fileController.updateFile);
router.delete('/:id', fileController.deleteFile);

module.exports = router;
