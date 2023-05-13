import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  Link,
  Switch,
} from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { LoginModel, LoginResponseModel } from '../models/login'

interface LoginFormProps {
  login: (data: LoginModel) => Promise<LoginResponseModel>
}

const LoginForm = ({ login }: LoginFormProps) => {
  const navigate = useNavigate()
  const [form, setForm] = useState<LoginModel>({
    email: '',
    password: '',
    isProfessional: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    login(form)
      .then((response) => {
        localStorage.setItem(
          '@nestClin:userAuth',
          JSON.stringify({
            token: response.token,
            isProfessional: form.isProfessional,
          })
        )
        navigate('/services')
      })
      .finally(() => setIsLoading(false))
  }

  const handleSwitchChange = () => {
    setForm((prevState) => ({
      ...prevState,
      isProfessional: !prevState.isProfessional,
    }))
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target

    setForm((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <Flex
      as='main'
      w={'full'}
      minH={'90vh'}
      align={'center'}
      justify={'center'}
      bg={'gray.900'}
    >
      <Stack
        spacing={8}
        mx={'auto'}
        maxW={'lg'}
        py={12}
        px={6}
        bg={'gray.800'}
        rounded={'lg'}
        boxShadow={'lg'}
        minW={{ base: '90vw', md: '50vw', lg: '40vw', xl: '30vw' }}
      >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color={'white'}>
            Faça Login
          </Heading>
          <Text fontSize={'lg'} color={'gray.400'}>
            ou{' '}
            <Link as={RouterLink} to='/sign-up' color={'blue.400'}>
              crie uma nova conta
            </Link>
          </Text>
        </Stack>
        <Box>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id='email'>
                <FormLabel color={'white'}>Email</FormLabel>
                <Input
                  value={form.email}
                  onChange={handleChange}
                  type='email'
                  name='email'
                  bg={'white'}
                />
              </FormControl>
              <FormControl id='password'>
                <FormLabel color={'white'}>Senha</FormLabel>
                <Input
                  value={form.password}
                  onChange={handleChange}
                  type='password'
                  name='password'
                  bg={'white'}
                />
              </FormControl>

              <Stack spacing={4}>
                <Flex justify='space-between' alignItems='center'>
                  <FormLabel color={'white'}>
                    {form.isProfessional ? 'Profissional' : 'Cliente'}
                  </FormLabel>
                  <Switch
                    colorScheme='blue'
                    isChecked={form.isProfessional}
                    onChange={handleSwitchChange}
                  />
                </Flex>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type='submit'
                  isLoading={isLoading}
                  loadingText='Entrando'
                >
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginForm
