import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {store} from './app/store'
import {Paths} from './paths'
import './index.css'
import {Login} from './pages/login'
import {Register} from './pages/register'

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h2>Home page</h2>
  }, {
    path: Paths.login,
    element: <Login/>
  }, {
    path: Paths.register,
    element: <Register/>
  }
])
const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
