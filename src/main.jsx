import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './Routes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter(router)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)