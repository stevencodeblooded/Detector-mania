import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="min-h-screen">
        <Navigation />
        <Outlet />
        <div className=" sticky top-full">
          <Footer />
        </div>
    </div>
  )
}

export default Layout