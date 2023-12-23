import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import IndexPage from './pages/IndexPage'
import Webinars from './pages/Webinars'
import WebinarPage from './pages/WebinarPage'
import CartContainer from './pages/CartContainer'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/webinars' element = {<Webinars />} />
          <Route path='/webinars/:id' element = {<WebinarPage />} />
          <Route path='/cart' element = {<CartContainer />} />



        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App