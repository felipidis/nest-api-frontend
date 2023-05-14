import { Box, Text, VStack } from '@chakra-ui/react'
import { Job } from '../models/job'
import { priceFormatter } from '../utils/currencyFormatter'

interface ClientAttendanceSummaryProps {
  jobs: Job[]
}
const ClientAttendanceSummary = ({ jobs }: ClientAttendanceSummaryProps) => {
  const total = jobs.reduce((acc, job) => acc + Number(job.price), 0)

  return (
    <Box>
      <Text>
        O seu pedido foi realizado com sucesso! Confira abaixo o resumo dos
        serviços realizados e o valor total.
      </Text>

      <VStack mt={8} align='stretch'>
        {jobs.map((job) => (
          <Box
            key={job.id}
            py={2}
            borderBottom='1px solid'
            borderColor='gray.200'
          >
            <Text fontWeight='bold'>{job.description}</Text>
            <Text>{priceFormatter.format(Number(job.price))}</Text>
          </Box>
        ))}
        <Box mt={4} textAlign={'end'}>
          <Text fontWeight='bold'>Valor total:</Text>
          <Text>{priceFormatter.format(total)}</Text>
        </Box>
      </VStack>
    </Box>
  )
}

export default ClientAttendanceSummary
