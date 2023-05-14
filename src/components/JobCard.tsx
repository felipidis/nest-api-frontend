import { useEffect, useState } from 'react'
import { Job } from '../models/job'
import {
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
import { priceFormatter } from '../utils/currencyFormatter'

interface JobCardProps {
  job: Job
  setSelectedJobs: React.Dispatch<React.SetStateAction<Job[]>>
  selectedJobs: Job[]
}

const JobCard = ({ job, setSelectedJobs, selectedJobs }: JobCardProps) => {
  const [isDisabled, setIsDisabled] = useState(false)
  useEffect(() => {
    setIsDisabled(selectedJobs.some((selectedJob) => job.id === selectedJob.id))
  }, [job.id, selectedJobs])

  const handleAddJob = (job: Job) => {
    setSelectedJobs((prev) => [...prev, job])
  }
  return (
    <Card maxW='sm'>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{job.description}</Heading>
          <Text color='blue.600' fontSize='2xl'>
            {priceFormatter.format(Number(job.price))}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex gap={'20px'} align={'center'}>
          <Button
            onClick={() => handleAddJob(job)}
            variant='solid'
            colorScheme='blue'
            isDisabled={isDisabled}
          >
            Adicionar a lista
          </Button>
          <Text variant='ghost' colorScheme='blue'>
            {job.duration} min
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default JobCard
