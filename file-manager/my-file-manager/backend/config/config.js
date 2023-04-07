module.exports = {
    // Cấu hình kết nối đến MongoDB
    mongoDB: {
      uri: 'mongodb://localhost/my-file-manager', // Chuỗi kết nối MongoDB
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    },
    // Cấu hình cổng và địa chỉ IP của server
    server: {
      port: 3000, // Cổng của server
      ip: '127.0.0.1' // Địa chỉ IP của server
    }
  };
  