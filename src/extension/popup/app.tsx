import { ColorModeScript } from '@chakra-ui/color-mode'
import { Box } from '@chakra-ui/layout'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'

import customTheme from './theme/theme'

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box p="4" w="lg">
        <Main />
      </Box>
    </ChakraProvider>
  )
}

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={'dark'} />
    <App />
  </>,
  document.getElementById('root')
)
