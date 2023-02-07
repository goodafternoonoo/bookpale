const Mongoose = require('mongoose');
// import { config } from '../config/config.js';

// env파일에서 mongodb url 가져오기
const DB_URL = process.env.MONGODB_URL;
Mongoose.set("strictQuery", false);

// 몽구스로 connect
Mongoose.connect(DB_URL);
const database = Mongoose.connection;

database.on("connected", () => console.log("MongoDB에 정상적으로 연결되었습니다. " + DB_URL));
database.on("error", (error) => console.error("MongoDB연결에 실패하였습니다. 다시 확인해주세요..." + DB_URL + error))
















// export async function connectDB() {
//   return Mongoose.connect(config.db.host);
// };

// export function userVirtualId(schema) {
//   schema.virtual('id').get(function() {
//     return this._id.toString();
//   })
//   schema.set('toJSON', { virtuals: true });
//   schema.set('toObject', { virtuals: true });
// }