import Home from './home'
import Shop from './Shop'

const router = [
    {
      path: "/",
      element: <Home />,
      errorElement: <h1>You have reached nothing</h1>
    },
    {
      path: "/Shop",
      element: <Shop />
    },
]

  export default router