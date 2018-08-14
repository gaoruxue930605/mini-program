import wepy from 'wepy'
const baseUrl = 'http://femock.seeapp.com/mock/5b71af5e707de2008cde6865'
// const baseUrl = 'https://www.maiyacareer.com'

const request = async (url, data, method = 'GET') => {
  const contentType = method === 'GET' ? 'application/json;charset=UTF-8' : 'application/x-www-form-urlencoded'
  const token = wepy.getStorageSync('token')
  const config = {
    url: `${baseUrl}${url}`,
    data: { ...data },
    header: {
      'Content-Type': contentType,
      'token': token
    },
    method
  }
  try {
    const promise = await wepy.request(config)
    return Promise.resolve(promise)
  } catch (error) {
    console.error(error)
  }
}

export const weGet = (url, data) => request(url, data, 'GET')
export const wePost = (url, data) => request(url, data, 'POST')
export const login = async () => {
  const token = wepy.getStorageSync('token')
  if (token) return
  try {
    const data = {}
    const login = await wepy.login()
    const resLogin = await wePost('/wxapp/user/login', {
      code: login.code
    })
    if (!resLogin.data) return
    data.session_key = resLogin.data.session_key
    wepy.setStorageSync('token', resLogin.data && resLogin.data.token)
    if (parseInt(resLogin.data.userinfo) === 1) {
      const userInfo = await wepy.getUserInfo()
      data.encryptedData = userInfo.encryptedData
      data.iv = userInfo.iv
      wePost('/wxapp/user/makeinfo', data)
    }
  } catch (error) {
    console.error(error)
  }
}
