import { Job } from '../models/job'
import { api } from './api'

export const loadJobs = async (): Promise<Job[]> => {
  return await api.get('job').then((response) => response.data)
}
