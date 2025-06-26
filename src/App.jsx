import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles' // Import ThemeProvider and createTheme
import router from './Router'

// Create a theme
const theme = createTheme({
  // You can customize your theme here, e.g., adding breakpoints, colors, etc.
})

const App = () =>  {
  return (
    // Wrap the RouterProvider with ThemeProvider to ensure all components have access to the theme
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
