import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Box, Button, Flex, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { loadJobs } from '../../services/loadJobsService'
import { Job } from '../../models/job'
import JobCard from '../../components/JobCard'
import AttendanceModal from '../../components/Modal'
import { createAttendance } from '../../services/createAttendanceService'

const Services: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [selectedJobs, setSelectedJobs] = useState<Job[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    loadJobs().then(setJobs)
  }, [])

  return (
    <>
      <Box bg='gray.900' minH='100vh'>
        <Header />
        <Flex as={'main'} minH={'90vh'} direction={'column'} p={'20px'}>
          <Flex justify={'flex-end'} mb={'20px'}>
            <Button
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'blue.400'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={onOpen}
            >
              Novo atendimento
            </Button>
          </Flex>
          <Stack minH={'70vh'} justify={'center'}>
            <Text textAlign={'center'} fontSize={'4xl'} color={'white'}>
              Selecione os serviços que deseja adicionar ao seu atendimento!
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              direction={{ base: 'column', md: 'row' }}
              flexWrap={'wrap'}
              gap={'4'}
              h={'fit-content'}
            >
              {!!jobs.length &&
                jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    setSelectedJobs={setSelectedJobs}
                    selectedJobs={selectedJobs}
                  />
                ))}
            </Flex>
          </Stack>
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
