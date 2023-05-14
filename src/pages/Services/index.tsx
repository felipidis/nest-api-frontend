import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import { loadJobs } from '../../services/loadJobsService'
import { JobModel } from '../../models/job'
import AttendanceModal from '../../components/Modal'
import { createAttendance } from '../../services/createAttendanceService'
import { loadAttendances } from '../../services/loadAttendancesService'
import { AttendanceModel } from '../../models/attendance'
import ClientServicesView from '../../components/ClientServicesView'
import ProfessionalServiceView from '../../components/ProfessionalServicesView'
import { updateAttendanceService } from '../../services/updateAttendanceService'
import { loadProfessional } from '../../services/loadProfessionalService'
import { ProfessionalModel } from '../../models/professional'

const Services: React.FC = () => {
  const [jobs, setJobs] = useState<JobModel[]>([])
  const [attendances, setAttendances] = useState<AttendanceModel[]>([])
  const [selectedJobs, setSelectedJobs] = useState<JobModel[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [professional, setProfessional] = useState<ProfessionalModel | null>(
    null
  )
  const [refresh, setRefresh] = useState(false)

  const userAuth = JSON.parse(localStorage.getItem('@nestClin:userAuth')!)

  useEffect(() => {
    loadProfessional().then(setProfessional)
    if (userAuth.isProfessional) {
      loadAttendances().then(setAttendances)
    } else {
      loadJobs().then(setJobs)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])

  const handleServiceView = () => {
    return userAuth.isProfessional ? (
      <ProfessionalServiceView
        attendances={attendances}
        updateAttendanceService={updateAttendanceService}
        professional={professional!}
        setRefresh={setRefresh}
      />
    ) : (
      <ClientServicesView
        jobs={jobs}
        setSelectedJobs={setSelectedJobs}
        onOpen={onOpen}
        selectedJobs={selectedJobs}
      />
    )
  }

  return (
    <>
      <Box bg='gray.900' minH='100vh'>
        <Header />
        <Flex
          as={'main'}
          minH={'90vh'}
          direction={'column'}
          p={'20px'}
          justify={userAuth.isProfessional && 'center'}
        >
          {handleServiceView()}
        </Flex>
      </Box>
      <AttendanceModal
        isOpen={isOpen}
        onClose={onClose}
        jobs={selectedJobs}
        setSelectedJobs={setSelectedJobs}
        createAttendance={createAttendance}
      />
    </>
  )
}

export default Services
