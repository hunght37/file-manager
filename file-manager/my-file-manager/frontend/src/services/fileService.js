import axios from 'axios';

const API_BASE_URL = 'https://example.com/api';

export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(`${API_BASE_URL}/files/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const downloadFile = async (fileId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/files/${fileId}/download`, {
      responseType: 'blob'
    });
    return response.data;
  } catch (error) {
    console.error('Error downloading file:', error);
    throw error;
  }
};

export const deleteFile = async (fileId) => {
  try {
    await axios.delete(`${API_BASE_URL}/files/${fileId}`);
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
};

// Các phương thức khác cho các hoạt động liên quan đến file và thư mục khác
