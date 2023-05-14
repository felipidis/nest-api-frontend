import { CreateAttendanceRequest } from '../models/attendance'
import { api, api_config } from './api'

export const createAttendance = async (
  data: CreateAttendanceRequest
): Promise<void> => {
  return await api.post('attendance', data, api_config())
}
