import { AttendanceModel } from '../models/attendance'
import { api } from './api'

export const loadAttendances = async (): Promise<AttendanceModel[]> => {
  return await api.get('attendance').then((response) => response.data)
}
