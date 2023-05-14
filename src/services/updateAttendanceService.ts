import { AttendanceUpdateRequest } from '../models/attendance'
import { api, api_config } from './api'

export const updateAttendanceService = async (
  data: AttendanceUpdateRequest,
  id: string
): Promise<void> => {
  return await api.put(`attendance/${id}`, data, api_config())
}
