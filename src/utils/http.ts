import router from "@/router";
import { links } from "@/router/links";
import axios from "axios";

const httpInstance = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

httpInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

httpInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token')
      router.navigate(links.login)
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export { httpInstance }