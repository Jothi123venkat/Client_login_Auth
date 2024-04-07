import * as CryptoJS from 'crypto-js';
export const cryptodecryptJS = (plainText) => {
    var iv = "297A1646BC32E036CF3C4DE1B1926A71";
    var salt = "32E036CF3C4DE1B192297A1646BC6A71297A164DE1B1926A716BC32E036CF3C4";
    var keySize = 128;
    var iterationCount = 1024;
    var passPhrase = "tnrarcpencryption";
    var AesUtil = function (keySize, iterationCount) {
        this.keySize = keySize / 32;
        this.iterationCount = iterationCount;
    };
    AesUtil.prototype.generateKey = function (salt, passPhrase) {
        var key = CryptoJS.PBKDF2(
            passPhrase,
            CryptoJS.enc.Hex.parse(salt),
            { keySize: this.keySize, iterations: this.iterationCount });
        return key;
    }

    AesUtil.prototype.decrypt = function (salt, iv, passPhrase, plainText) {
        var key = this.generateKey(salt, passPhrase);
        var encrypted = CryptoJS.AES.decrypt(
            plainText,
            key,
            { iv: CryptoJS.enc.Hex.parse(iv) });
        return encrypted.toString(CryptoJS.enc.Utf8);
    }
    var aesUtil = new AesUtil(keySize, iterationCount);
    var val = aesUtil.decrypt(salt, iv, passPhrase, plainText);   
     
    return val
}
export default cryptodecryptJS;