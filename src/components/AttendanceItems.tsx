import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Job } from '../models/job'
import { priceFormatter } from '../utils/currencyFormatter'

interface AttendanceItemsProps {
  jobs: Job[]
  setJobsList: React.Dispatch<React.SetStateAction<Job[]>>
}

const AttendanceItems = ({ jobs, setJobsList }: AttendanceItemsProps) => {
  const removeJob = (job: Job) => {
    const updatedJobs = jobs.filter((j) => j.id !== job.id)
    setJobsList(updatedJobs)
  }

  return (
    <>
      {jobs.map((job) => (
        <Box key={job.id} mb='4'>
          <Text fontWeight='bold'>{job.description}</Text>
          <Flex justify={'space-between'} align={'center'}>
            <Text>
              {priceFormatter.format(Number(job.price))} - {job.duration}{' '}
              minutos
            </Text>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={() => removeJob(job)}
            >
              Remover
            </Button>
          </Flex>
        </Box>
      ))}
    </>
  )
}

export default AttendanceItems
