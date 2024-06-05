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
        Projects,
        Experience 
      } from './pages'

const router = createBrowserRouter([
  {
  path: '/',
  element: <Home />,
  children: [
    {
      index: true,
      path: 'landing',
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
    },
    {
      path: 'experience',
      element: <Experience />
    }
  ]
  },
])
const App = () => {
  return (<RouterProvider router={router}> 
    </RouterProvider>)
}

export default App
