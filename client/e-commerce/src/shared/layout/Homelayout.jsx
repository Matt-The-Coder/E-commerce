import { Outlet } from "react-router-dom"
import Header from "../partials/Header.jsx"
import Footer from "../partials/Footer.jsx"

const Homelayout = ()=>{
    const MyContext = "Hello"
    return (
        <div className='Homelayout'>
            <Header/>
           <Outlet context={{MyContext}}/>
           <Footer/>
        </div>
    )
}
export default Homelayout