import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {store} from './app/store'
import {Paths} from './paths'
import './index.css'
import {Login} from './pages/login'
import {Register} from './pages/register'
import {ConfigProvider, theme} from 'antd'
import {Auth} from './features/auth/auth'
import {Employees} from './pages/employees'
import {AddEmployee} from './pages/add-employee'
import {Status} from './pages/status'
import {Employee} from './pages/employee'
import {EditEmployee} from './pages/edit-employee'

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Employees/>
  }, {
    path: Paths.login,
    element: <Login/>
  }, {
    path: Paths.register,
    element: <Register/>
  }, {
    path: Paths.employeeAdd,
    element: <AddEmployee/>
  }, {
    path: `${Paths.employeeEdit}/:id`,
    element: <EditEmployee/>
  }, {
    path: `${Paths.employee}/:id`,
    element: <Employee/>
  }, {
    path: `${Paths.status}/:status`,
    element: <Status/>
  }
])
const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
        <Auth>
          <RouterProvider router={router}/>
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
)
