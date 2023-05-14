import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/',
})

export const api_config = () => {
  const userAuth = JSON.parse(localStorage.getItem('@nestClin:userAuth')!)

  return {
    headers: {
      Authorization: 'Bearer ' + userAuth.token,
    },
  }
}
