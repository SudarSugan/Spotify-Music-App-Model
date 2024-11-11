import NavBar from './Pages/NavBar'
import Footer from './Pages/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
    <div>
    <NavBar />
    </div>

    <div>
      <Outlet/>
      
      </div>
    <div> <Footer /></div>
   
    

    </>
  )
}

export default App
