//product 신규 작성

const uuid = require("uuid");
const { User } = require("../db");

class userAuthService {
  static async addUser({ name, email, password }) {
    const id = uuid.v4();
    console.log(id);

    const newUser = { id, name, email, password };

    // > db에 저장하기
    const createNewUser = await User.create({ newUser });
    console.log("db에 사용자가 정상적으로 등록되었습니다.");

    return createNewUser;
  }
}

module.exports = { userAuthService };
