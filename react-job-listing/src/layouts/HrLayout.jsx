import { Outlet } from "react-router-dom";
import HrNavBar from "../components/hr/HrNavBar"
import Footer from "../components/Footer";

const HrLayout = () =>{
    
    return(
        <>
            <HrNavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default HrLayout;