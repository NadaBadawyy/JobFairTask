import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import CartDetails from './pages/CartDetails'
import Layout from './components/Layout'
function App() {
  let routes = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
        {path:'/',element:<Products/>},
        {path:'/products/:id',element:<ProductDetails/>},
        {path:'/cart',element:<CartDetails/>},
    ]}
    
  ])
  return (
    <>
     
    <RouterProvider router={routes}>
      
    </RouterProvider>
    
    </>
  )
}

export default App
