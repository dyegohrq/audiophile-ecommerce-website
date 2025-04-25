import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { route } from './route'
import ProductProvider from './context/Context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider>
      <RouterProvider router={route}/>
    </ProductProvider>
  </StrictMode>,
)
