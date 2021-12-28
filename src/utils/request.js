import axios from 'axios'
import { ELMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response
    if (success) {
      return data
    } else {
      // 失败 => 请求成功 业务失败
      ELMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 请求失败
    ELMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
