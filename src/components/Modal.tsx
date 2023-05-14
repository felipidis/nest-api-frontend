import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react'
import { Job } from '../models/job'
import AttendanceItems from './AttendanceItems'
import { useState } from 'react'
import ClientAttendanceSummary from './ClientAttendanceSummary'
import { CreateAttendanceRequest } from '../models/attendance'
import { error } from 'console'
import { toast } from 'react-toastify'

interface AttendanceModalProps {
  onClose: () => void
  isOpen: boolean
  jobs: Job[]
  setSelectedJobs: React.Dispatch<React.SetStateAction<Job[]>>
  createAttendance: (data: CreateAttendanceRequest) => Promise<void>
}

const AttendanceModal = ({
  onClose,
  isOpen,
  jobs,
  setSelectedJobs,
  createAttendance,
}: AttendanceModalProps) => {
  const [showSummary, setShowSummary] = useState(false)

  const handleClose = () => {
    setShowSummary(false)
    setSelectedJobs([])
    onClose()
  }

  const handleCreateAttendance = () => {
    const jobIds = jobs.map((job) => job.id)
    createAttendance({ jobIds })
      .then(() => {
        toast.success('Atendimento criado com sucesso!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
        setShowSummary(true)
      })
      .catch((error) =>
        toast.error(error.response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      )
  }

  const handleShowSummary = () => {
    return showSummary ? (
      <ClientAttendanceSummary jobs={jobs} />
    ) : (
      <AttendanceItems jobs={jobs} setJobsList={setSelectedJobs} />
    )
  }

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Novo Atendimento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {jobs.length ? (
              <>{handleShowSummary()}</>
            ) : (
              <>
                <Text fontSize={'lg'} color={'gray.400'}>
                  Nenhum serviço foi selecionado para iniciar o atendimento.
                </Text>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            {showSummary ? (
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleClose}
              >
                Fechar
              </Button>
            ) : (
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleCreateAttendance}
                isDisabled={!jobs.length}
              >
                Solicitar atendimento
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AttendanceModal
