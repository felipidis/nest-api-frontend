import { Button, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import JobCard from './JobCard'
import { JobModel } from '../models/job'

interface ClientServicesViewProps {
  jobs: JobModel[]
  setSelectedJobs: React.Dispatch<React.SetStateAction<JobModel[]>>
  onOpen: () => void
  selectedJobs: JobModel[]
}

const ClientServicesView = ({
  jobs,
  setSelectedJobs,
  onOpen,
  selectedJobs,
}: ClientServicesViewProps) => {
  return (
    <>
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
    </>
  )
}

export default ClientServicesView
