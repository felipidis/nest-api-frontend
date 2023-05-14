import { LoginModel, LoginResponseModel } from '../models/login'
import { api } from './api'

export const login = async (
  formData: LoginModel
): Promise<LoginResponseModel> => {
  return await api
    .post('auth/login', formData)
    .then((response) => response.data)
}
