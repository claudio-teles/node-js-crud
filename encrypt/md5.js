md5 = require('js-md5');

var encrypt = (senha) => {
    return md5(String(senha));
}

module.exports = encrypt;