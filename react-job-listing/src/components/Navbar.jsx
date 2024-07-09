import Logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
const Navbar = () =>{
    return (
        <>
            <nav className="navbar smoke" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src={Logo} alt="Logo" width="50px" height="50px" className="d-inline-block align-text-top"/>
                <h3 className='d-inline-block align-bottom mx-lg-4' >Galaxy Innovative Solution</h3>
                </a>
                <div className='mx-3'>
                    <Link to="/" className='btn'>Home</Link>
                    <Link to="/career" className='btn'>Career</Link>
                    <Link to="/status" className='btn'>Check Application Status</Link>
                </div>
            </div>
            </nav>
        </>
    )
}
export default Navbar;