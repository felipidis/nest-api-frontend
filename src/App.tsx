import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider resetCSS>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
