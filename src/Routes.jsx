import Home from './home'
import Shop from './shop'
import Cart from './Cart'

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
    {
      path:"/Cart",
      element: <Cart />
    }
]

  export default router