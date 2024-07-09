import { useNavigate } from "react-router-dom";

const JobCard = ({id,role='NA',experience='NA',location='NA',description='NA',salary='NA'}) =>{

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

                <button className="btn btn-primary text-light mt-auto" onClick={()=>{
                    navigate('/apply',{state:id});
                }} role="button">Apply Now</button>
            </div>
        </div>
    )
}
export default JobCard;