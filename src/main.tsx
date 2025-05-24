import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { route } from './route'
import ProductProvider from './context/Context'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={route}/>
    </ProductProvider>
  </StrictMode>,
)
