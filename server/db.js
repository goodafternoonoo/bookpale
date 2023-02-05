//db 연결 파일
const mongoose = require('mongoose');
mongoose.set('strictQuery',true);

module.exports = () => {
  function connect() {
    mongoose.connect('mongodb://localhost:27017', function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
  require('./db/models/test'); //모델 사용...
};