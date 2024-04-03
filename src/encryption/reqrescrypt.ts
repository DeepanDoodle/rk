import crypto from 'crypto'

let ALGORITHM_TYPE = 'aes-256-cbc';
let ENCRYPTION_KEY = 'ZyRgRE87pA0tNE6GnNRPAThqTkwb02xl';
let IV = 'kEB1IYLeTOGJA0Rq'


class ReqResEncrypt {

    /**
* Decryption for all incoming requests
*/
    requestDecryption = async (text: any) => {
        return new Promise<string>((resolve: any, reject: any) => {
            try {
                let encryptedText = Buffer.from(text, 'hex');
                const decipher = crypto.createDecipheriv(ALGORITHM_TYPE, Buffer.from(ENCRYPTION_KEY), IV);
                let decrypted = decipher.update(encryptedText);
                decrypted = Buffer.concat([decrypted, decipher.final()]);
                return resolve(decrypted.toString());
            } catch (error) {
                // errorLog("requestDecryption", error)
                return reject(error)
            }
        })
    };


    /**
    * Encryption for all processed responses
    */

    responseEncryption = async (text: any) => {
        return new Promise<string>((resolve: any, reject: any) => {
            try {
                let cipher = crypto.createCipheriv(ALGORITHM_TYPE, Buffer.from(ENCRYPTION_KEY), IV);
                let encrypted = cipher.update(text);
                encrypted = Buffer.concat([encrypted, cipher.final()]);
                return resolve(encrypted.toString('hex'));
            } catch (error) {
                //   errorLog("responseEncryption", error)
                return reject(error)
            }
        })
    };



}

export default new ReqResEncrypt();



