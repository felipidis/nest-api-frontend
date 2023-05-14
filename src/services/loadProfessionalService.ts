import { ProfessionalModel } from '../models/professional'
import { api, api_config } from './api'

export const loadProfessional = async (): Promise<ProfessionalModel> => {
  return await api
    .get('professional/profile', api_config())
    .then((response) => response.data)
}
