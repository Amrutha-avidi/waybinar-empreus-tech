import { Outlet } from 'react-router-dom'
import './App.css'

import Header from './Header'

const Layout = () => {
  return (
    <main className='layout'>
        <Header />
        <Outlet />   {/*emables children components to display under header */}
    </main>
  )
}

export default Layout