import { Link } from "react-router-dom";

const JoinUS = () =>{
    return(
        <div className="d-flex flex-column py-5">
            <h1 className="text-black text-center">Join Us</h1>
            <Link className="btn blue text-light btn-lg m-5" to="/career" role="button">Career Opportunities {'>>>>'} </Link>

        </div>
    )
}
export default JoinUS;