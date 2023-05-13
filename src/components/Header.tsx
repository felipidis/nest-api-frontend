import { Button, Flex, Stack, Heading, Text } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const publicRoutes: any = {
  '/': true,
  '/login': true,
  '/sign-up': true,
}

const Header = () => {
  const location = useLocation()

  return (
    <Flex
      as={'nav'}
      align={'center'}
      justify={'space-between'}
      py={4}
      px={{ base: 2, sm: 4 }}
      bg={'gray.800'}
    >
      <Heading as={'h1'} size='lg' fontWeight='bold' color={'white'}>
        <Text as={RouterLink} to='/'>
          NestClin
        </Text>
      </Heading>
      <Stack direction={'row'} spacing={4}>
        {publicRoutes[location.pathname] ? (
          <>
            <Button
              as={RouterLink}
              to='/login'
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'blue.400'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Entrar
            </Button>
            <Button
              as={RouterLink}
              to='/sign-up'
              variant={'link'}
              fontSize={'sm'}
              fontWeight={400}
              color={'gray.400'}
              _hover={{
                color: 'white',
                textDecoration: 'underline',
              }}
            >
              Cadastrar-se
            </Button>
          </>
        ) : (
          <>
            <Button
              as={RouterLink}
              to='/services'
              variant={'link'}
              fontSize={'sm'}
              fontWeight={400}
              color={'gray.400'}
              _hover={{
                color: 'white',
                textDecoration: 'underline',
              }}
            >
              Serviços
            </Button>
            <Button
              as={RouterLink}
              to='/profile'
              variant={'link'}
              fontSize={'sm'}
              fontWeight={400}
              color={'gray.400'}
              _hover={{
                color: 'white',
                textDecoration: 'underline',
              }}
            >
              Perfil
            </Button>
          </>
        )}
      </Stack>
    </Flex>
  )
}

export default Header
