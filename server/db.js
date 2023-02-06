//db 연결 파일
const { ATLAS_NAME, ATLAS_PWD } = process.env;
const mongoose = require('mongoose');
mongoose.set('strictQuery',true);

module.exports = () => {
  function connect() {
    mongoose.connect(
      `mongodb+srv://${ATLAS_NAME}:${ATLAS_PWD}@atlascluster.vaw0jlk.mongodb.net/?retryWrites=true&w=majority`, function (err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
};