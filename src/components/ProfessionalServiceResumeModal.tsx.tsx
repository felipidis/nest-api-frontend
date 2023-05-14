import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
} from '@chakra-ui/react'
import { JobModel } from '../models/job'
import { priceFormatter } from '../utils/currencyFormatter'

interface ProfessionalServiceResumeModalProps {
  onClose: () => void
  isOpen: boolean
  jobs: JobModel[]
}

const ProfessionalServiceResumeModal = ({
  onClose,
  isOpen,
  jobs,
}: ProfessionalServiceResumeModalProps) => {
  const totalMinutes = jobs.reduce((total, job) => total + job.duration, 0)
  const commission = jobs.reduce(
    (total, job) => total + Number(job.price) * Number(job.commission),
    0
  )

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Atendimento finalizado!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text fontSize='xl' fontWeight='bold' mb={4}>
                Resumo do Serviço
              </Text>
              <Text>Duração total: {totalMinutes} minutos</Text>
              <Text>
                Valor total a receber: {priceFormatter.format(commission)}
              </Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={onClose}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfessionalServiceResumeModal
