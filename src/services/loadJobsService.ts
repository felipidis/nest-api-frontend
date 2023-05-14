import { JobModel } from '../models/job'
import { api } from './api'

export const loadJobs = async (): Promise<JobModel[]> => {
  return await api.get('job').then((response) => response.data)
}
