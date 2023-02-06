import dotenv from 'dotenv';
dotenv.config();

// 기본 디폴트 설정을 위한 코드?
function requried(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if(value == null){
    throw new Error(`Key ${key} is undefined`);
  }
}