import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
    <div className="font-mono">
      <div className="min-h-[85vh]">
        <Nav/>
      <Outlet/></div>
      
      <Footer/>
    </div>
      
    </>
  )
}
