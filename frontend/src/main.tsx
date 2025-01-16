import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Mainlayout from './layouts/MainLayout'
import { Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Products } from './pages/Product'
import { Provider } from 'react-redux'
import  Store  from './store/store'
import { NotFound } from './components/NotFound'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
