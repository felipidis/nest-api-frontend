import { SignUpModel } from '../models/signUp'
import { api } from './api'

export const createUser = async (formData: SignUpModel): Promise<void> => {
  const { isProfessional, ...payload } = formData
  if (isProfessional) {
    return await api.post('professional', payload)
  }
  return await api.post('client', payload)
}
