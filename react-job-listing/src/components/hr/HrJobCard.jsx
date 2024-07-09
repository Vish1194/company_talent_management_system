import { useNavigate } from "react-router-dom";

const HrJobCard = ({id,role='NA',experience='NA',location='NA',description='NA',salary='NA', isHomepage}) =>{

    const navigate = useNavigate();

    return(
        <div className="card m-2"  style={{minWidth:'250px',maxWidth:'400px'}}>
            <div className="card-body d-flex flex-column">
                <h3 className="card-title text-center mb-3">{role}</h3>
                <p className="card-text text-secondary">Job ID : {id}</p>
                <p className="card-text text-secondary">Experience : {experience}</p>
                <p className="card-text text-secondary">Location : {location}</p>
                <p className="card-text">{description.split(" ").slice(0,20).join(" ")+'....'}</p>
                <p className="card-text text-success">Salary : {salary}</p>

                { isHomepage ? '' :
                 //If not homepage then render this.
                <div className="mt-auto text-center">
                <button className="btn btn-info text-light mx-1" onClick={()=>{
                    navigate('/hr/update-job',{state:id});
                }} role="button">Update</button>
                <button className="btn btn-danger text-light mx-1" onClick={()=>{
                    navigate('/hr/remove-job',{state:id})
                }} role="button">Remove</button>
                </div>
                }
            </div>
        </div>
    )
}
export default HrJobCard;