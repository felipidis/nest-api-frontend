import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import { AttendanceModel, AttendanceUpdateRequest } from '../models/attendance'
import { priceFormatter } from '../utils/currencyFormatter'
import { ProfessionalModel } from '../models/professional'

interface AttendanceCardProps {
  attendance: AttendanceModel
  updateAttendanceService: (
    data: AttendanceUpdateRequest,
    id: string
  ) => Promise<void>
  professional?: ProfessionalModel
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

const AttendanceCard = ({
  attendance,
  updateAttendanceService,
  professional,
  setRefresh,
}: AttendanceCardProps) => {
  const handleInitAttendance = () => {
    updateAttendanceService(
      { professionalId: professional?.id },
      attendance.id
    ).then(() => {
      setRefresh((prevState) => !prevState)
    })
  }

  const handleFinsishAttendance = () => {
    updateAttendanceService({ isFinished: true }, attendance.id).then(() => {
      setRefresh((prevState) => !prevState)
    })
  }

  return (
    <Card maxW='sm' minH={'350px'}>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Atendimento # {}</Heading>

          {attendance.jobs.map((job) => (
            <Box key={job.id} mb='4'>
              <Text fontWeight='bold'>{job.description}</Text>
              <Flex justify={'space-between'} align={'center'}>
                <Text>{priceFormatter.format(Number(job.price))}</Text>
              </Flex>
            </Box>
          ))}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex gap={'20px'} align={'center'}>
          {attendance.professionalId ? (
            <Button
              variant='solid'
              colorScheme='blue'
              onClick={handleFinsishAttendance}
            >
              Finalizar Atendimento
            </Button>
          ) : (
            <Button
              variant='solid'
              colorScheme='blue'
              onClick={handleInitAttendance}
            >
              Iniciar Atendimento
            </Button>
          )}
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default AttendanceCard
