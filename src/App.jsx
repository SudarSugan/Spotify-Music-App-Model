import NavBar from './Pages/NavBar'
// import Home from './Pages/Home'
import Footer from './Pages/Footer'
import { Outlet } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/next';

function App() {
  

  return (
    <>
    <div>
    <NavBar />
    </div>
    <SpeedInsights />
    <div>
      <Outlet/>
      
      </div>
    <div> <Footer /></div>
   
    

    </>
  )
}

export default App
