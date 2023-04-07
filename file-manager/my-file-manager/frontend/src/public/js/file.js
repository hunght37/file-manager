document.getElementById('fileUploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    // Kiểm tra nếu không có file được chọn
    if (!file) {
        alert('Vui lòng chọn một file để tải lên.');
        return;
    }

    // Gửi yêu cầu tải lên file lên server
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        // Nếu tải lên thành công, làm mới danh sách file
        loadFileList();
        alert('Tải lên thành công.');
    } else {
        // Nếu có lỗi, hiển thị thông báo lỗi
        const errorMessage = await response.text();
        alert(`Tải lên thất bại: ${errorMessage}`);
    }
});

async function loadFileList() {
    const response = await fetch('/files');
    const fileList = await response.json();

    const fileListElement = document.getElementById('fileList');
    fileListElement.innerHTML = ''; // Xóa danh sách file hiện tại

    // Tạo lại danh sách file từ dữ liệu mới nhận được
    fileList.forEach(file => {
        const fileItemElement = document.createElement('div');
        fileItemElement.textContent = file.filename;
        fileListElement.appendChild(fileItemElement);
    });
}

// Gọi hàm loadFileList() để hiển thị danh sách file khi trang web được tải lên
loadFileList();
