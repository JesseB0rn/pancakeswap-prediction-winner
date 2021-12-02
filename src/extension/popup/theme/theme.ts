import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  
  
}

// 3. extend the theme
const customTheme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#35BFB3",
      100: "#35BFB3",
      200: "#35BFB3",
      300: "#35BFB3",
      400: "#35BFB3",
      500: "#35BFB3",
      600: "#35BFB3",
      700: "#35BFB3",
      800: "#35BFB3",
      900: "#35BFB3"
    }
  }, })


export default customTheme;