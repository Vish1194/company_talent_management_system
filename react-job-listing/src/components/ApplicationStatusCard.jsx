import {useNavigate} from 'react-router-dom'


const ApplicationStatusCard = ({role,application_id,job_id,experience}) =>{
    const navigate = useNavigate();
    return(
        <>
            <div className="card m-2"  style={{minWidth:'370px',maxWidth:'500px'}}>
            <div className="card-body d-flex flex-column">
                <h4 className="card-title text-center mb-3">{role}</h4>
                <p className="card-text text-secondary">Job ID : {job_id} </p>
                <p className="card-text text-dark">Application ID : {application_id}</p>
                <p className="card-text text-dark">Experience : {experience}</p>

                <button className="btn btn-outline-primary text-dark fw-medium mt-auto" onClick={()=>{
                    navigate('/apply',{state:job_id});
                }} role="button">Job Description{' ->'}</button>
            </div>
        </div>
        </>
    )
}
export default ApplicationStatusCard;