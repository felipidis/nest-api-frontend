import React from 'react'
import Header from '../../components/Header'
import LoginForm from '../../components/LoginForm'
import { login } from '../../services/loginService'
import { Box } from '@chakra-ui/react'

const Login: React.FC = () => {
  return (
    <Box bg='gray.900' height='100vh'>
      <Header />
      <LoginForm login={login} />
    </Box>
  )
}

export default Login
