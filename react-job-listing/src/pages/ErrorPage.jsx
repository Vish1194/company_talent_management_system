import { Link } from 'react-router-dom';
import Icon404 from '../assets/images/404.png'

const ErrorPage = () =>{
    return(
        <div className="text-center mt-3">
            <img src={Icon404} alt="404 Error" width='250px' height='250px'/>
            <h1 className="error-1">404 Error</h1>
            <h1 className="error-2 my-5">Oops page not found!!!!</h1>
            <Link to='/' className='btn btn-lg btn-dark my-5'>Go Back</Link>
        </div>
    )
}
export default ErrorPage;