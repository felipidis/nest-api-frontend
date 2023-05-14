import React, { useEffect } from 'react'
import Header from '../../components/Header'
import LoginForm from '../../components/LoginForm'
import { login } from '../../services/loginService'
import { Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
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
      <LoginForm login={login} />
    </Box>
  )
}

export default Login
