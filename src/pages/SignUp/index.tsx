import React, { useEffect } from 'react'
import Header from '../../components/Header'
import SignUpForm from '../../components/SignUpForm'
import { createUser } from '../../services/signUpService'
import { Box } from '@chakra-ui/react'
import { login } from '../../services/loginService'
import { useNavigate } from 'react-router-dom'

const SignUp: React.FC = () => {
  const navigate = useNavigate()
  const userAuth = JSON.parse(localStorage.getItem('@nestClin:userAuth')!)
  useEffect(() => {
    if (userAuth?.token) {
      navigate('/services')
    }
  }, [])
  return (
    <Box bg='gray.900' height='100vh'>
      <Header />
      <SignUpForm createUser={createUser} login={login} />
    </Box>
  )
}

export default SignUp
