import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import ProductList from './pages/ProductList'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<ProductList />} />
    </Route>
  )
)

export default function App() {
  return (
    <div className='bg-containerBg' id='App'>
      <RouterProvider router={router} />
    </div>
  )
}
