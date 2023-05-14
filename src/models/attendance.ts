import { JobModel } from './job'

export interface CreateAttendanceRequest {
  jobIds: string[]
}

export interface AttendanceModel {
  id: string
  isFinished: boolean
  clientId: string
  professionalId: string
  jobs: JobModel[]
}

export interface AttendanceUpdateRequest {
  isFinished?: boolean
  professionalId?: string
  jobs?: JobModel[]
}
