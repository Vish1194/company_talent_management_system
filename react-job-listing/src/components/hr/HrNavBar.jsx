import Logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials=true;

const HrNavbar = () =>{
    const logout =async () =>{
        const response = await axios.post('/api/hr-logout')
        console.log(response.data);
    }

    return (
        <>
            <nav className="navbar smoke">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src={Logo} alt="Logo" width="50px" height="50px" className="d-inline-block align-text-top"/>
                <h3 className='d-inline-block align-bottom mx-lg-4' >Galaxy Innovative Solution</h3>
                </a>
                <div className='mx-3'>
                    <Link to="/hr" className='btn'>Home</Link>
                    <Link to="/hr/career" className='btn'>Career Page / Update </Link>
                    <Link to="/hr/add-job" className='btn'>Add Job</Link>
                    <Link to="/hr/candidates" className='btn'>Candidates / Applicants</Link>
                </div>
                <div>
                <Link to='/hr-login' onClick={()=>{
                    logout();
                }} className="btn btn-dark fs-6 mx-4">Logout</Link>

                </div>
            </div>
            </nav>
        </>
    )
}
export default HrNavbar;