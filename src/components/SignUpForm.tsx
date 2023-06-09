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
import { SignUpModel } from '../models/signUp'
import { toast } from 'react-toastify'
import { LoginModel, LoginResponseModel } from '../models/login'

interface SignUpFormProps {
  createUser: (payload: SignUpModel) => Promise<void>
  login: (payload: LoginModel) => Promise<LoginResponseModel>
}

const SignUpForm = ({ createUser, login }: SignUpFormProps) => {
  const navigate = useNavigate()
  const [form, setForm] = useState<SignUpModel>({
    name: '',
    email: '',
    password: '',
    isProfessional: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    createUser(form)
      .then(() => {
        toast.success('Cadastro realizado com sucesso', {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
        const { name, ...payload } = form
        login(payload).then((response) => {
          localStorage.setItem(
            '@nestClin:userAuth',
            JSON.stringify({
              token: response.token,
              isProfessional: form.isProfessional,
            })
          )
          navigate('/services')
        })
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
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
    <Flex as='main' minH={'90vh'} align={'center'} justify={'center'}>
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
            Cadastre-se
          </Heading>
          <Text fontSize={'lg'} color={'gray.400'}>
            ou{' '}
            <Link as={RouterLink} to='/login' color={'blue.400'}>
              faça login na sua conta
            </Link>
          </Text>
        </Stack>
        <Box>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id='name'>
                <FormLabel color={'white'}>Nome</FormLabel>
                <Input
                  onChange={handleChange}
                  type='text'
                  name='name'
                  bg={'white'}
                />
              </FormControl>
              <FormControl id='email'>
                <FormLabel color={'white'}>Email</FormLabel>
                <Input
                  onChange={handleChange}
                  type='email'
                  name='email'
                  bg={'white'}
                  autoComplete='username'
                />
              </FormControl>
              <FormControl id='password'>
                <FormLabel color={'white'}>Senha</FormLabel>
                <Input
                  onChange={handleChange}
                  type='password'
                  name='password'
                  bg={'white'}
                  autoComplete='current-password'
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
                  loadingText='Cadastrando'
                >
                  Cadastrar
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

export default SignUpForm
