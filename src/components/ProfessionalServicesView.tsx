import { VStack, Heading, Flex, useDisclosure } from '@chakra-ui/react'
import AttendanceCard from './AttendanceCard'
import { AttendanceModel, AttendanceUpdateRequest } from '../models/attendance'
import { ProfessionalModel } from '../models/professional'
import { useEffect, useState } from 'react'
import ProfessionalServiceResumeModal from './ProfessionalServiceResumeModal.tsx'

interface ProfessionalServiceViewProps {
  attendances: AttendanceModel[]
  updateAttendanceService: (
    data: AttendanceUpdateRequest,
    id: string
  ) => Promise<void>
  professional: ProfessionalModel
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfessionalServiceView = ({
  attendances,
  updateAttendanceService,
  professional,
  setRefresh,
}: ProfessionalServiceViewProps) => {
  const [openAttendances, setOpenAttendances] = useState<AttendanceModel[]>(
    attendances.filter((attendance) => attendance.professionalId === null)
  )
  const [initializedAttendaces, setInitializedAttendances] = useState<
    AttendanceModel[]
  >(attendances.filter((attendance) => attendance.isFinished === false))

  const [selectedAttendance, setSelectedAttendance] =
    useState<AttendanceModel | null>(null)

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    setOpenAttendances(
      attendances.filter((attendance) => attendance.professionalId === null)
    )
    setInitializedAttendances(
      attendances.filter(
        (attendance) =>
          attendance.isFinished === false &&
          attendance.professionalId === professional?.id
      )
    )
  }, [attendances, professional])

  return (
    <>
      <VStack spacing={8} align='center' color={'white'}>
        <Heading as='h1' size='xl'>
          Atendimentos em aberto
        </Heading>
        <Flex
          align={'center'}
          justify={'center'}
          direction={{ base: 'column', md: 'row' }}
          flexWrap={'wrap'}
          gap={'4'}
          h={'fit-content'}
        >
          {openAttendances.map((attendance, index) => (
            <AttendanceCard
              key={index}
              attendance={attendance}
              updateAttendanceService={updateAttendanceService}
              professional={professional}
              setRefresh={setRefresh}
            />
          ))}
        </Flex>

        <Heading as='h1' size='xl'>
          Atendimentos iniciados
        </Heading>
        <Flex
          align={'center'}
          justify={'center'}
          direction={{ base: 'column', md: 'row' }}
          flexWrap={'wrap'}
          gap={'4'}
          h={'fit-content'}
        >
          {initializedAttendaces.map((attendance, index) => (
            <AttendanceCard
              key={index}
              attendance={attendance}
              updateAttendanceService={updateAttendanceService}
              setRefresh={setRefresh}
              setSelectedAttendance={setSelectedAttendance}
              onOpen={onOpen}
            />
          ))}
        </Flex>
      </VStack>

      <ProfessionalServiceResumeModal
        jobs={selectedAttendance?.jobs ?? []}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

export default ProfessionalServiceView
