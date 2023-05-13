import React from 'react'
import Header from '../../components/Header'
import SignUpForm from '../../components/SignUpForm'
import { createUser } from '../../services/signUpService'
import { Box } from '@chakra-ui/react'
import { login } from '../../services/loginService'

const SignUp: React.FC = () => {
  return (
    <Box bg='gray.900' height='100vh'>
      <Header />
      <SignUpForm createUser={createUser} login={login} />
    </Box>
  )
}

export default SignUp
