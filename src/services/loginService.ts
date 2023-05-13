import { LoginModel } from '../models/login'
import { api } from './api'

export const login = async (formData: LoginModel): Promise<void> => {
  return await api.post('auth/login', formData)
}
