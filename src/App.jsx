import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
  element: <h2>Home page</h2>
  },
  {
    path: '/about',
    element: <h2>About page</h2>
  }
])
const App = () => {
  return (<RouterProvider router={router}> 
    </RouterProvider>)
}

export default App
