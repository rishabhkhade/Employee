const CryptoJS = require('crypto-js');
const dotenv = require('dotenv');
dotenv.config();

const cryptoEncrypt = (text) => {
    return CryptoJS.AES.encrypt(text.toString(), process.env.JWT_SECRET).toString();
};

const cryptoDecrypt = (text) => {
    return CryptoJS.AES.decrypt(text, process.env.JWT_SECRET).toString(CryptoJS.enc.Utf8);
};


module.exports = {cryptoEncrypt, cryptoDecrypt};
