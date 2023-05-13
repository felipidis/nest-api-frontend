import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ChakraProvider resetCSS>
      <RouterProvider router={router} />
      <ToastContainer />
    </ChakraProvider>
  )
}

export default App
