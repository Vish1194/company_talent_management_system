import AdminLogin from "../components/hr/AdminLogin";
import Logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";




const AdminLoginPage = () =>{
    return(
        <>
        <nav className="navbar smoke">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" width="50px" height="50px" className="d-inline-block align-text-top"/>
                    <h3 className='d-inline-block align-bottom mx-lg-4' >Galaxy Innovative Solution</h3>
                </Link>
            </div>
            </nav>
            <AdminLogin/> 
            <div className="text-center pb-5">
            <Link to="/" className="fs-3">Go To Home</Link>
            </div>
        </>
    )
}
export default AdminLoginPage;