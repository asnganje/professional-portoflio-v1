import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { 
        About, 
        Awards, 
        Contact, 
        Education, 
        Home, 
        Landing, 
        Resume, 
        Skills, 
        Projects 
      } from './pages'

const router = createBrowserRouter([
  {
  path: '/',
  element: <Home />,
  children: [
    {
      index: true,
      element: <Landing />
    },
    {
      path: 'awards',
      element: <Awards />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'education',
      element: <Education />
    },
    {
      path: 'projects',
      element: <Projects />
    },
    {
      path: 'resume',
      element: <Resume />
    },
    {
      path: 'skills',
      element: <Skills />
    },
    {
      path: 'about',
      element: <About />
    }
  ]
  },
])
const App = () => {
  return (<RouterProvider router={router}> 
    </RouterProvider>)
}

export default App
