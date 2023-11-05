import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='lora'>
        <RouterProvider router={Routes} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
