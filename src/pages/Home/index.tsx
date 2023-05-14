import React, { useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const userAuth = JSON.parse(localStorage.getItem('@nestClin:userAuth')!)
  useEffect(() => {
    if (userAuth?.token) {
      navigate('/services')
    }
  }, [])

  return (
    <Box bg='gray.900' color='white' height='100vh'>
      <Header />
      <Box px='4' pt='20'>
        <Text fontSize='6xl' fontWeight='bold' mb='4'>
          Bem-vindo a NestClin
        </Text>
        <Text fontSize='xl'>
          Somos uma clínica especializada em cuidados de saúde para toda a
          família. Nossos médicos altamente qualificados oferecem serviços de
          alta qualidade em um ambiente acolhedor e amigável. Agende sua
          consulta hoje mesmo!
        </Text>
      </Box>
    </Box>
  )
}

export default Home
