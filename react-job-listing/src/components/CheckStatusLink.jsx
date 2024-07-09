import { Link } from "react-router-dom";


const CheckStatusLink = () =>{
    return(
        <div className="text-center">
            <Link to='/status' className="link-success m-2 fs-3 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-bolder">Check application status{' ->'}</Link>
        </div>
    )
}
export default CheckStatusLink;