import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'
import PopularProgram from './pages/Programs/PopularProgram'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'programs/popular',
        element: <PopularProgram />
      }
    ]
  }
])

export default router
