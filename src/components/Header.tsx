import { Button, Flex, Stack, Heading } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
const Header = () => {
  return (
    <Flex
      align={'center'}
      justify={'space-between'}
      py={4}
      px={{ base: 2, sm: 4 }}
      bg={'gray.800'}
      minH={'10vh'}
    >
      <Heading as='h1' size='lg' fontWeight='bold' color={'white'}>
        Meu Site
      </Heading>
      <Stack direction={'row'} spacing={4}>
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
      </Stack>
    </Flex>
  )
}

export default Header
