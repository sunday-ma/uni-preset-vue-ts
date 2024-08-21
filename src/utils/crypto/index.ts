import CryptoJS from 'crypto-js'

/**
 * # 加密
 * @param text 加密文本 加密的字符串最长为 117 个字符，超过请分段加密
 * @param key 加密key
 * @param iv 加密iv
 * @returns 加密后文本
 */
export function encrypt(text: string, key: string, iv: string) {
  const encKey = CryptoJS.enc.Latin1.parse(key)
  const encIv = CryptoJS.enc.Latin1.parse(iv)
  const enCode = CryptoJS.AES.encrypt(text, encKey, {
    iv: encIv,
    mode: CryptoJS.mode.CBC,
    adding: CryptoJS.pad.ZeroPadding,
  }).toString()

  return enCode
}

/**
 * # 解密
 * @param text 加密后文本
 * @param key 加密key
 * @param iv 加密iv
 * @returns 解密后文本
 */
export function decrypt(text: string, key: string, iv: string) {
  // 解密word
  const baseResult = CryptoJS.enc.Base64.parse(text) // Base64解密
  const cipher = CryptoJS.enc.Base64.stringify(baseResult) // Base64解密

  // 默认key
  if (key === null || key === undefined) {
    console.error('key is null or undefined')
  }

  // 解iv
  const words = CryptoJS.enc.Base64.parse(iv) // Base64解密
  const wordsText = CryptoJS.enc.Utf8.stringify(words) // Base64解密

  // 解数据
  const decryptResult = CryptoJS.AES.decrypt(cipher, CryptoJS.enc.Utf8.parse(key), {
    //  AES解密
    iv: CryptoJS.enc.Utf8.parse(wordsText),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })

  // 解密后的字符串
  let result = decryptResult.toString(CryptoJS.enc.Utf8).toString()

  // 尝试转化成json数据
  try {
    result = JSON.parse(result)
  }
  catch (error) {
    console.error(error)
  }

  // 返回解密后的数据
  return result
}
